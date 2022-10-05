let CLITextInputDiv = document.getElementById("CLITextInput");
let content = document.getElementById("content")
let CLITextOutputDiv = document.getElementById("CLIOutputDiv");

const app = Vue.createApp({
    data: () => ({
        CLITextInput: "",
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
                // + CLITextOutputDiv.innerHTML;
            this.CLITextInput = ""
            console.log(CLITextOutputDiv.innerHTML)
            content.scrollTo(0, content.scrollHeight);
        }
    }
})
app.mount('#input')