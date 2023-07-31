import React, { FC, useState, useEffect } from "react";
import { Box, Text, Picker, Page, Input, Select, DatePicker } from "zmp-ui";
const { Option, OtpGroup } = Select;

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
        const data = await response.json(); 
        const productList: Product[] = data.products;
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Page className="space-y-3 px-4">
      <Text.Header>Test control</Text.Header>
      <Box mt={6}>
        <Picker
          label="Chọn sản phẩm"
          // helperText="Helper text"
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

        <Picker
          label="Chọn nhiều sản phẩm"
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
              name: "product1",
            },
          ]}
        />
          <Input
              type="text"
              label="Label"
              placeholder="Placeholder"
            />
         <Input.TextArea label="Label TextArea" helperText="Helper text" showCount />
         <Input.OTP  show otpLength={6} />
         <Input
              type="text"
              label="Label"
              placeholder="Placeholder"
              clearable={{
                mode: "always",
              }}
              defaultValue="Filled"
            />
          <Input
            type="text"
            label="Label"
            placeholder="Placeholder"
            status="success"
            defaultValue="Filled"
          />
          

          <Select
            label="Select"
            placeholder="Placeholder"
            defaultValue="1"
          >
             <OtpGroup label="Group 1">
              <Option value="1" title="Text" />
              <Option value="2" title="Text" />
            </OtpGroup>
            <OtpGroup label="Group 2">
              <Option value="3" title="Text" />
              <Option value="4" title="Text" />
              <Option value="5" title="Text" disabled />
              <Option value="6" title="Text" />
            </OtpGroup>
          </Select>

          <DatePicker
            label="DataPicker"
            placeholder="Placeholder"
            mask
            maskClosable
            dateFormat="dd/mm/yyyy"
            title="Test picker"
          />
      </Box>
    </Page>
    
  );
};
