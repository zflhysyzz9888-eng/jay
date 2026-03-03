// 功能 1: 打招呼函数
function sayHello() {
    alert("你好！欢迎开始你的 Web 开发之旅！🚀");
}

// 功能 2: 切换深色模式
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    // 切换 class
    body.classList.toggle('dark-mode');
    
    // 改变按钮文字
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = "切换模式 ☀️";
    } else {
        themeToggleBtn.textContent = "切换模式 🌙";
    }
});

console.log("网站已加载，JS 运行正常！");