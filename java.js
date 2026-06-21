console.log('Javascript已連結，準備進行互動...');

let vistorname=prompt('請輸入你的姓名：');

if (vistorname ==='' ||vistorname ===null){
    vistorname='訪客';
}

window.alert('Hello ' +vistorname+ '，歡迎來到我的網站！');

const logoElement = document.getElementById('main-logo');
logoElement.innerText = "11152257" +vistorname ;

const titleElement = document.getElementById('hero-title');
titleElement.innerHTML = `我的未來，由<span class="highlight">${vistorname}</span>主宰`;

function changeColor(){
    const highlight = document.querySelector('.highlight');
    if (highlight.style.color === 'red'){
        highlight.style.color = 'aqua';
    }else{
        highlight.style.color='red';
    }
}

const SendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const aiResponse = document.getElementById('ai-response');

SendBtn.addEventListener('click',function(){
    const userMessage = userInput.value;

    if(userMessage===''){
        alert('請先輸入指令呦！')
        return;
    }
    setTimeout(function(){
      if(userMessage.includes('淺色')||userMessage.includes('白天')){
        document.body.className='theme-light';
        aiResponse.innerText='AI助理：您好呀～今天過得好嗎';
      }
      else if(userMessage.includes('功能')||userMessage.includes('做什麼')){
        aiResponse.innerText='AI助理：我可以陪你聊天、幫你換標題的顏色';
      }
      else if (userMessage.includes('學校')||userMessage.includes('東吳')){
        aiResponse.innerText='AI助理：東吳大學是個學習網頁設計最棒的地方！';
      }
      else if(userMessage.includes('綠色')||userMessage.includes('駭客')){
        document.body.className='theme-matrix';
        aiResponse.innerText='AI助理：已啟動『駭客矩陣模式』';
      }
      else if (userMessage.includes('你好')||userMessage.includes('安安')){
        aiResponse.innerText='AI助理：東吳大學是個學習網頁設計最棒的地方！';
      }
      else if (userMessage.includes('深色')||userMessage.includes('晚上')){
        document.body.className='';
        aiResponse.innerText='AI助理：已為您恢復至『預設深色模式』。';
      }

     else if (userMessage.startsWith('新增')){
        document.getElementById('todo-input').value =
        userMessage.replace('新增','').trim();

    addTodo();

    aiResponse.innerText =
        'AI助理：已新增待辦事項';
}

  
      else{
        aiResponse.innerText='AI助理：我收到你的訊息「' + userMessage + '」了！不過我們目前還沒開發這個功能～';  
      }

    userInput.value=''

    });

});

    function notifyUser(task, time){
    if (Notification.permission === 'granted') {
        new Notification('Reminder', { body: `Time for: ${task} at ${time}`});
    }
}

function scheduleReminder(task, time) {
    const now = new Date();
    const reminderTime = new Date(time);
    const delay = reminderTime - now;

    if (delay > 0) {
        setTimeout(() => notifyUser(task, time),delay);
    }
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const timeInput = document.getElementById('todo-time');
    const newTodoText = input.value.trim();
    const reminderTime = timeInput.value;

    if (newTodoText !== ''){
        const li = document.createElement('li');
        li.className = 'todo-item';

        const textSpan = document.createElement('span');
        textSpan.textContent = newTodoText;

        const timeSpan = document.createElement('span');
        timeSpan.textContent = reminderTime ? `提醒日期與時間： ${new Date(reminderTime).toLocaleString()}` :'沒有設定提醒時間';

        li.appendChild(textSpan);
        li.appendChild(timeSpan);

        li.addEventListener('click', function() {
    this.classList.toggle('completed');
});

li.addEventListener('dblclick', function() {
    this.remove();
});

        

        document.getElementById('todo-list').appendChild(li);
        input.value = '';
        timeInput.value = '';

        if (reminderTime){
            scheduleReminder(newTodoText,reminderTime);
        }
    }
}
