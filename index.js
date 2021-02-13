const myEmojis = ['👑', '💑 ', '😍', '👱‍♀️', '🙆‍♀️', '👸', '😌', '👢']
const emojiContainer = document.getElementById('emoji-container')

function renderEmoji() {
    for (let i = 0; i < myEmojis.length; i++) {

        let emojis = document.createElement('span')
        emojis.textContent = myEmojis[i]
        emojiContainer.append(emojis)

    }
}
renderEmoji()

const pushBtn = document.getElementById('push-btn')
const emojiInput = document.getElementById('emoji-input')

function onPushBtn() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ''
        console.log(myEmojis)
        emojiContainer.innerHTML = ''
        renderEmoji()
    }
}
onPushBtn()
pushBtn.addEventListener('click', onPushBtn)

const unshiftBtn = document.getElementById('unshift-btn')

function onUnshiftBtn() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ''
        console.log(myEmojis)
        emojiContainer.innerHTML = ''
        renderEmoji()
    }
}
onUnshiftBtn()
unshiftBtn.addEventListener('click', onUnshiftBtn)

const popBtn = document.getElementById('pop-btn')

function onPopBtn() {
    myEmojis.pop()
    emojiContainer.innerHTML = ''
    renderEmoji()
    console.log(myEmojis)
}
onPopBtn
popBtn.addEventListener('click', onPopBtn)

const shiftBtn = document.getElementById('shift-btn')

function onShiftBtn() {
    myEmojis.shift()
    emojiContainer.innerHTML = ''
    renderEmoji()
    console.log(myEmojis)
}
onShiftBtn
shiftBtn.addEventListener('click', onShiftBtn)