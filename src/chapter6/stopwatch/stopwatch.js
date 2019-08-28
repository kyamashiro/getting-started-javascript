/* eslint-disable require-jsdoc */
window.onload = ()=>{
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const display = document.getElementById('display');
  let startTime; let timer;
  startButton.onclick=start;

  function start() {
    // startButtonのイベントハンドラを無効化
    startButton.onclick = null;
    // stopButtonのイベントハンドラを登録
    stopButton.onclick=stop;
    startTime = new Date();
    // 0.01秒ごとに経過時間を表示
    timer = setInterval(()=>{
      const now = new Date();
      display.innerHTML = ((now - startTime)/1000).toFixed(2);
    }, 10);
  }

  function stop() {
    // setIntervalの解除
    clearInterval(timer);
    startButton.onclick = start;
  }
};


