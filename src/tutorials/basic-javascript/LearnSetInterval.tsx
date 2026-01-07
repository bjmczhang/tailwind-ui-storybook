import { useEffect, useRef } from "react";

/* 

------ 👉 什么是 setInterval ------
setInterval 是 JavaScript 提供的一个“定时器函数”
它会：每隔固定时间，重复执行一次函数
setInterval = 每隔一段时间“自动帮你调用一次函数”

------ 👉 语法说明 ------
const id = setInterval(callback, delay);
参数	                 含义
callback	        每次执行的函数
delay	            间隔时间（毫秒）

返回值：
- 返回的是定时器 ID
- 有了定时器 ID 就可以用 clearInterval(id) 来停止它

------ 👉 如何停止 ------
React 标准写法：

useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => {
    clearInterval(id); // ✅ 清理
  };
}, []);

------ 👉 setInterval 和 setTimeout 的区别 ------
|               | setTimeout | setInterval |
| ------------- | ---------- | ----------- |
| 执行次数       | 1 次        | 无限次      |
| 是否自动停止   | ✅          | ❌         |
| 是否需要 clear | 可选         | 必须        |

------ 👉 用 setTimeout 模拟 setInterval ------
function loop() {
  setTimeout(() => {
    console.log("tick");
    loop();
  }, 1000);
}

loop();

*/

const LearnSetInterval = () => {
  const countRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>Check console</div>;
};

export default LearnSetInterval;
