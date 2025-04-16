
import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Camera, CameraOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ScannerProps {
  onBarcodeDetected?: (barcode: string) => void;
}

const Scanner = ({ onBarcodeDetected }: ScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const scanIntervalRef = useRef<number | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsScanning(true);
        
        // Load the barcode detection library dynamically
        const ZXing = await import('@zxing/library');
        const codeReader = new ZXing.BrowserMultiFormatReader();
        
        // Clear any existing interval
        if (scanIntervalRef.current) {
          clearInterval(scanIntervalRef.current);
        }
        
        // Start continuous scanning
        scanIntervalRef.current = window.setInterval(async () => {
          if (videoRef.current && isScanning) {
            try {
              const result = await codeReader.decodeFromVideoElement(videoRef.current);
              if (result && result.getText()) {
                const barcodeValue = result.getText();
                console.log("Barcode detected:", barcodeValue);
                
                if (onBarcodeDetected) {
                  onBarcodeDetected(barcodeValue);
                }
                
                toast({
                  title: "Barcode Detected",
                  description: "Successfully scanned barcode: " + barcodeValue,
                });
                
                stopCamera(); // Stop after successful detection
              }
            } catch (error) {
              // Ignore errors during scanning attempts
              console.log("Still scanning...");
            }
          }
        }, 500);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    // Clear scanning interval
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }
    
    // Stop camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsScanning(false);
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[300px] mx-auto">
      {/* Scanner frame */}
      <div 
        className={cn(
          "absolute inset-0 border-2 rounded-2xl transition-all duration-500",
          isScanning ? "border-primary" : "border-muted"
        )}
      >
        {/* Corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-md border-primary"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-md border-primary"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-md border-primary"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-md border-primary"></div>
      </div>
      
      {/* Camera feed */}
      <video 
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={cn(
          "w-full h-full object-cover rounded-2xl",
          !isScanning && "hidden"
        )}
      />
      
      {/* Scanner content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            <Camera className="w-12 h-12 mb-4 text-muted-foreground" />
            <p className="text-center text-sm text-muted-foreground mb-4">
              Ready to scan product barcodes
            </p>
            <Button 
              onClick={startCamera}
              className="premium-button"
            >
              Start Camera
            </Button>
          </>
        ) : (
          <>
            <p className="animate-pulse text-primary font-medium mb-4">Scanning...</p>
            <Button 
              onClick={stopCamera}
              variant="outline"
              size="sm"
            >
              <CameraOff className="w-4 h-4 mr-2" />
              Stop Camera
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Scanner;
