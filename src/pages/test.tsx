import React, { FC, useState } from "react";
import {
  Box,
  Header,
  Page,
  Text,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Radio,
  Slider,
  Switch,
} from "zmp-ui";
const { Option, OtpGroup } = Select;

const TestList: FC = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedRadio((prevValue) => (prevValue === value ? null : value));
  };
  return (
    <div>
      <Box mt={6}>
        <Input
          type="number"
          label="Label 1"
          helperText="Helper text"
          placeholder="Placeholder"
        />

        <Input
          type="text"
          label="Label 2"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="Filled"
        />

        <Input
          type="text"
          label="Label 3"
          helperText="Helper text"
          placeholder="Placeholder"
          clearable={{
            mode: "always",
          }}
          defaultValue="Filled"
        />

        <Input
          type="text"
          label="Label 4"
          helperText="Helper text"
          placeholder="Placeholder"
          status="success"
          defaultValue="Filled"
        />

        <Input
          type="text"
          label="Label 5"
          helperText="Helper text"
          placeholder="Placeholder"
          status="error"
          errorText="Error text"
          defaultValue="Filled"
        />

        <Input
          type="text"
          label="Label 6"
          helperText="Helper text"
          placeholder="Placeholder"
          status="success"
          defaultValue="Filled"
        />

        <Input
          type="text"
          label="Label 7"
          helperText="Helper text"
          placeholder="Placeholder"
          clearable
          status="success"
          disabled
          value="Filled"
        />
      </Box>

      <Box mt={6}>
        <Text.Title size="small">Password Field</Text.Title>
        <Input.Password
          label="Label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="Filled"
          clearable
        />
      </Box>

      <Box mt={6}>
        <Text.Title size="small">Select Field</Text.Title>
        <Select
          label="Label 1"
          helperText="Helper text"
          placeholder="Placeholder"
          clearable
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
        <Select
          placeholder="Placeholder"
          clearable
          multiple
          defaultValue={["1"]}
        >
          <Option value="1" title="Text" />
          <Option value="2" title="Text" />
          <Option value="3" title="Text" />
          <Option value="4" title="Text" />
        </Select>
      </Box>

      <Box mt={6}>
        <Text.Title size="small">Search Field</Text.Title>
        <Box mt={6}>
          <Input.Search
            label="Label"
            helperText="Helper text"
            placeholder="Placeholder"
            defaultValue="Filled"
            clearable
            onSearch={(value) => {
              console.log(value);
            }}
          />

          <Box mt={6}>
            <Input.Search
              placeholder="Placeholder"
              size="small"
              onSearch={(value) => {
                console.log(value);
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box mt={6}>
        <Text.Title size="small">DatePicker Field</Text.Title>
        <DatePicker
          label="Label"
          helperText="Helper text"
          placeholder="Placeholder"
          mask
          maskClosable
          dateFormat="dd/mm/yyyy"
          title="Test picker"
        />
      </Box>

      <Box mt={6}>
        <Input.TextArea
          className="custom-class"
          placeholder="Placeholder"
          maxLength={100}
          showCount={false}
        />
      </Box>

      <Box mt={6}>
        <Text.Title size="small">Checkbox</Text.Title>
        <Box mt={6}>
          <Checkbox label="Label 1" />
        </Box>
        <Box mt={6}>
          <Checkbox defaultChecked label="Labe 2" />
        </Box>
        <Box mt={6}>
          <Checkbox disabled label="Label 3" />
        </Box>
        <Box mt={6}>
          <Checkbox defaultChecked disabled label="Label" />
        </Box>
      </Box>

      <Box mt={6}>
        <DatePicker
          label="Label"
          helperText="Helper text"
          mask
          maskClosable
          dateFormat="dd/mm/yyyy"
          title="DatePicker"
          defaultValue={new Date("2023-07-29")}
        />
      </Box>

      <Box mt={6}>
        <Radio
          name="radio-group"
          value={1}
          label="Nhãn 1"
          checked={selectedRadio === 1}
          onChange={() => handleRadioChange(1)}
        />
      </Box>
      <Box mt={6}>
        <Radio
          name="radio-group"
          value={2}
          label="Nhãn 2"
          checked={selectedRadio === 2}
          onChange={() => handleRadioChange(2)}
        />
      </Box>
      <Box mt={6}>
        <Radio
          name="radio-group"
          value={3}
          label="Nhãn 3"
          checked={selectedRadio === 3}
          onChange={() => handleRadioChange(3)}
        />
      </Box>

      <Box mb={6}>
        <Slider defaultValue={50} max={100} label="Label" showValue />
      </Box>
      <Box mb={6}>
        <Slider defaultValue={[20, 40]} />
      </Box>
      <Box mb={4}>
        <Slider defaultValue={3} marks max={4} />
      </Box>
      <Box mb={4}>
        <Slider defaultValue={[3, 7]} marks={[1, 5, 10]} max={10} />
      </Box>

      <Box mt={6}>
        <Switch></Switch>
      </Box>
    </div>
  );
};

const TestPage: FC = () => {
  return (
    <Page className="space-y-3 px-4">
      <Header title="Test Control" showBackIcon={false} />
      <TestList />
    </Page>
  );
};

export default TestPage;
