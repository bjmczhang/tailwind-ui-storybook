/* 

------ 👉 什么是 ref ------
ref = reference = 不参与渲染的引用

想象你家里有两样东西：
1. 电子显示屏（State）：这是 useState。
一旦你改了屏幕上的数字，全家人都看得到（页面会刷新/重新渲染）。
2. 床底下的盒子（Ref）：这是 useRef。
你在盒子里放一张纸条，或者改上面的数字，根本没人知道（页面不会刷新）。但是！当你下次打开盒子时，东西还在里面，不会丢。
useRef 的作用就是：记在小本本上，但不告诉界面。

------ 👉 为什么叫 “reference”？------

因为它的行为和普通变量不一样：
const ref = useRef(0);
你得到的不是 0，而是：
    {
      current: 0
    }
这个对象：
- 地址固定（reference 不变）
- 里面的 current 可以随便改
- 改了 不会触发 render

------ 👉 ref 在 JavaScript 里的本质 ======
const ref = { current: null };
React 只是帮你创建并长期保存了这个对象引用。

------ 👉 为什么 React 需要 ref 这种东西？ ------
因为 React 的核心规则是：
UI = f(state, props)
但现实中你总会需要：
- 访问 DOM
- 保存定时器 id
- 保存上一次的值
- 跳过 render 的数据
- 这些东西 不应该影响 UI，所以不能放在 state 里。
于是就有了 ref（reference）

------ 👉 和 useState 的一句话对比 ------
|                       | useState | useRef |
| --------------------- | -------- | ------ |
| 改变会触发 render      |   ✅    |   ❌   |
| 用来影响 UI            |   ✅    |   ❌   |
| 用来存 DOM / 外部值    |   ❌     |   ✅  |

------ 👉 useRef 的两大用途 ------
用途一：它是“遥控器”（操作 DOM）
这是最常用的功能。比如你想让一个输入框自动获得焦点，或者让视频自动播放。你不能直接用手去掰 DOM 元素，你要用 Ref 这个“遥控器”连上它。
import { useRef } from 'react';
function InputFocus() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus(); 
  }
  return (
    <>
      <input ref={inputRef} type="text" />  
      <button onClick={handleClick}>
        点我让输入框聚焦
      </button>
    </>
  );
}
发生了什么？ React 发现你把 inputRef 传给了 <input>，它就会自动把这个 HTML 元素塞进 inputRef.current 里。以后你只要找 inputRef.current，就等于找到了这个输入框。

用途二：它是“静音计数器”（存数据但不刷新）
有时候你需要记录一个数字，比如“用户点击了多少次”，但你不想每点一次就让页面闪一下（重新渲染）。
import { useRef } from 'react';
function SilentCounter() {
  // 1. 创建一个盒子，初始值是 0
  const countRef = useRef(0);
  function handleClick() {
    // 2. 偷偷增加数字
    countRef.current = countRef.current + 1;
    // 3. 打印出来看看（你看控制台会变，但页面上不会变）
    console.log("现在点击了：" + countRef.current + " 次");
  }
  return (
    <button onClick={handleClick}>
      疯狂点我（但我不会导致页面刷新）
    </button>
  );

------ 👉 React 19 的新变化 ------
在 React 19 之前，如果你想把这个“盒子”（Ref）从父组件传给子组件，非常麻烦，得用一个叫 forwardRef 的东西包裹子组件，写起来很恶心。
React 19 把这个痛点删掉了！
现在，传递 ref 就像传递普通的属性（比如 className 或 id）一样简单。
// 子组件：直接接收 ref 属性，不需要 forwardRef 了！
function MyInput({ placeholder, ref }) {
  return <input placeholder={placeholder} ref={ref} />;
}
// 父组件
function App() {
  const inputRef = useRef(null);
  return (
    <div>
      // 就像传普通参数一样直接传 ref 
      <MyInput ref={inputRef} placeholder="React 19 真香" />
      <button onClick={() => inputRef.current.focus()}>
        聚焦子组件
      </button>
    </div>
  );
}

}




*/
import { useRef } from "react";

export default function InputFocus() {
  // 1. 创建“盒子/遥控器”
  const inputRef = useRef<HTMLInputElement>(null);

  // 2. 定义按钮点击后的动作
  function handleClick() {
    // 拿到遥控器指向的那个 input，并命令它：聚焦！
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="p-10">
      {/* 3. 把遥控器(ref)插到电视机(input)上 */}
      <input
        ref={inputRef}
        type="text"
        placeholder="在这里输入..."
        className="border border-slate-500 focus:border-2 focus:border-blue-600 focus:shadow-md focus:shadow-blue-100 m-2 p-2 rounded outline-none"
      />

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition"
      >
        点我让输入框聚焦
      </button>
    </div>
  );
}
