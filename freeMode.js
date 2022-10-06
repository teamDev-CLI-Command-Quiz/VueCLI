let CLITextInputDiv = document.getElementById("CLITextInput");
let content = document.getElementById("content")
let CLITextOutputDiv = document.getElementById("CLIOutputDiv");

const app = Vue.createApp({
    data: () => ({
        CLITextInput: "",
        histories: [
            "",
        ],
        historiesCnt: 0,
    }),
    methods: {
        appendEchoParagraph:function(){
            CLITextOutputDiv.innerHTML += 
                `
                    <p class="m-0 output-text align-top"> 
                    <span>User</span>
                    <span>@</span>
                    <span>UsernoMacBook-Pro % ${this.CLITextInput}
                    </span>
                    </p>
                `
            if (this.CLITextInput !== "" && this.CLITextInput !== null) this.histories.push(this.CLITextInput)
            this.CLITextInput = ""
            content.scrollTo(0, content.scrollHeight);
        },
        cursorUpToGetHistories:function(){
            if (this.histories.length > 0) {
                this.CLITextInput = this.histories[this.historiesCnt]
                --this.historiesCnt 
                if (0 > this.historiesCnt) this.historiesCnt = this.histories.length - 1
            }
        },
        cursorDownToGetHistories:function(){
            if (this.histories.length > 0) {
                this.CLITextInput = this.histories[this.historiesCnt]
                ++this.historiesCnt
                if (this.histories.length <= this.historiesCnt) this.historiesCnt = 0
            }
        }

    }
})
app.mount('#app')