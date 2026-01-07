import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  PlusIcon,
  TrashIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";

// 1. 全局配置
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // 让组件在画布中间显示
  },
  // 2. 配置控制面板 (Controls)
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined", "soft", "text"],
      description: "视觉风格",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "info",
        "black",
        "white",
      ],
      description: "语义化颜色",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "按钮尺寸",
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill", "square", "circle"],
      description: "边角形状",
    },
    loading: {
      control: "boolean",
      description: "加载状态",
    },
    disabled: {
      control: "boolean",
      description: "禁用状态",
    },
    iconOnly: {
      control: "boolean",
      description: "是否仅图标模式",
    },
  },
  // 3. 默认参数
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
    size: "md",
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ==========================================
// 🎯 核心展示 (Playground)
// ==========================================
export const Playground: Story = {
  args: {
    children: "Button Text",
  },
};

// ==========================================
// 🎨 风格变体 (Variants)
// ==========================================
export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="soft">
        Soft
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
};

// ==========================================
// 🌈 颜色画板 (Colors)
// ==========================================
export const Colors: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex gap-4">
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="black">
          Black
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="error">
          Error
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
      </div>
    </div>
  ),
};

// ==========================================
// 📐 形状与尺寸 (Shapes & Sizes)
// ==========================================
export const ShapesAndSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      {/* 胶囊形 */}
      <div className="flex items-end gap-4">
        <Button shape="pill" size="xs">
          XS
        </Button>
        <Button shape="pill" size="sm">
          Small
        </Button>
        <Button shape="pill" size="md">
          Medium
        </Button>
        <Button shape="pill" size="lg">
          Large
        </Button>
        <Button shape="pill" size="xl">
          Extra Large
        </Button>
      </div>
      {/* 直角 */}
      <div className="flex items-center gap-4">
        <Button shape="square" variant="outlined">
          Square Button
        </Button>
        <Button shape="rounded">Default Rounded</Button>
      </div>
    </div>
  ),
};

// ==========================================
// ⚡️ 状态展示 (States)
// ==========================================
export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button loading variant="outlined" color="secondary">
        Processing
      </Button>
    </div>
  ),
};

// ==========================================
// 🧩 图标组合 (With Icons)
// ==========================================
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* 左侧图标 */}
        <Button>
          <PlusIcon className="size-5" />
          Create New
        </Button>

        {/* 右侧图标 */}
        <Button variant="soft" color="info">
          Read More
          <ArrowRightIcon className="size-5" />
        </Button>
      </div>

      <div className="flex gap-4">
        {/* 危险操作 */}
        <Button color="error" variant="outlined">
          <TrashIcon className="size-5" />
          Delete
        </Button>

        {/* 成功状态 */}
        <Button color="success" shape="pill">
          <CheckCircleIcon className="size-5" />
          Completed
        </Button>
      </div>
    </div>
  ),
};

// ==========================================
// 🔘 纯图标按钮 (Icon Only)
// ==========================================
export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {/* 圆形图标 */}
      <Button iconOnly shape="circle" color="primary">
        <PlusIcon className="size-5" />
      </Button>

      {/* 方形图标 */}
      <Button iconOnly shape="square" variant="outlined" color="secondary">
        <TrashIcon className="size-5" />
      </Button>

      {/* 大号图标 */}
      <Button iconOnly size="xl" shape="circle" color="warning" variant="soft">
        <PaperAirplaneIcon className="size-6" />
      </Button>
    </div>
  ),
};
