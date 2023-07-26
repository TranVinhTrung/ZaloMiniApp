import React, { FC, useState, useEffect } from "react";
import { Box, Text, Picker, Page } from "zmp-ui";
import { ListRenderer } from "components/list-renderer";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string
  // và các thuộc tính khác nếu cần thiết
}

export const DeliveryTest: FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Gọi API và lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:47896/zalo/product");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Dự đoán dữ liệu trả về là một đối tượng JSON
        const productList: Product[] = data.products; // Lấy mảng sản phẩm từ đối tượng JSON
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Page className="space-y-3 px-4">
      <Text.Header>Test picker</Text.Header>
      <Box mt={6}>
        <Picker
          label="Chọn sản phẩm"
          helperText="Helper text"
          placeholder="Placeholder"
          mask
          maskClosable
          title="Select a product"
          action={{
            text: "Close",
            close: true,
          }}
          // Set the selected option using state
          selectedValue={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
          // Use the products fetched from API to generate options for Picker
          data={[
            {
              options: products.map((product) => ({ value: product.id, displayName: product.title })),
              name: "product",
            },
          ]}
        />
      </Box>
      <Box mt={6}>
        <Picker
      label="Chọn nhiều sản phẩm"
      helperText="Helper text"
      placeholder="Placeholder"
      mask
      maskClosable
      title="Select multiple a product"
      action={{
        text: "Close",
        close: true,
      }}
      // Set the selected option using state
      selectedValue={selectedOption}
      onValueChange={(value) => setSelectedOption(value)}
      // Use the products fetched from API to generate options for Picker
      data={[
        {
          options: products.map((product) => ({ value: product.id, displayName: product.title })),
          name: "product",
        },
        {
          options: products.map((product) => ({ value: product.id, displayName: product.category })),
          name: "product",
        },
      ]}
    />
      </Box>
      
    </Page>
  );
};
