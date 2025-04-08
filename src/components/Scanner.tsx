
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Barcode } from "lucide-react";

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  // Simulate scanning process
  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

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
        
        {/* Scanning line animation */}
        {isScanning && <div className="scanner-line"></div>}
      </div>
      
      {/* Scanner content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            <Barcode className="w-12 h-12 mb-4 text-muted-foreground" />
            <p className="text-center text-sm text-muted-foreground mb-4">
              Ready to scan product barcodes or QR codes
            </p>
            <button 
              onClick={startScan}
              className="premium-button"
            >
              Start Scanning
            </button>
          </>
        ) : (
          <p className="animate-pulse text-primary font-medium">Scanning...</p>
        )}
      </div>
    </div>
  );
};

export default Scanner;
