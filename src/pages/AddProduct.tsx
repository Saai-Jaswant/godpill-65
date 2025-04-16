
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, ScanLine } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Scanner from "@/components/Scanner";

const productSchema = z.object({
  productName: z.string().min(2, "Product name must be at least 2 characters"),
  brand: z.string().min(2, "Brand name must be at least 2 characters"),
  ingredients: z.string().min(10, "Please provide a detailed list of ingredients"),
  barcode: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

const AddProduct = () => {
  const { toast } = useToast();
  const [showScanner, setShowScanner] = useState(false);
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      brand: "",
      ingredients: "",
      barcode: "",
    },
  });

  const handleBarcodeDetected = (barcode: string) => {
    console.log("Barcode detected in AddProduct:", barcode);
    form.setValue('barcode', barcode);
    setShowScanner(false);
    toast({
      title: "Barcode Scanned",
      description: `Barcode ${barcode} has been added to the form.`,
    });
  };

  async function onSubmit(values: ProductFormValues) {
    try {
      console.log("Form submitted with values:", values);
      // Replace this URL with your backend API endpoint
      const response = await fetch('http://your-backend-url/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      toast({
        title: "Success",
        description: "Product added successfully",
      });

      form.reset();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        title: "Error",
        description: "Failed to add product. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
            <p className="text-muted-foreground mt-2">
              Submit ingredient information for a new product. All submissions will be validated.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter brand name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingredients List</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter ingredients (comma separated)"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="barcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Barcode (Optional)</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="Enter product barcode" {...field} />
                      </FormControl>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setShowScanner(!showScanner)}
                      >
                        <ScanLine className="h-4 w-4" />
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showScanner && (
                <div className="my-4">
                  <Scanner onBarcodeDetected={handleBarcodeDetected} />
                </div>
              )}

              <Button type="submit" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
