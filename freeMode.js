let CLITextInput = document.getElementById("CLITextInput");
let CLITextOutputDiv = document.getElementById("CLIOutputDiv");

const app = Vue.createApp({
    data: () => ({
        CLITextInput: "",
    }),
    methods: {
        appendEchoParagraph:function(){
            let CLITextOutput = this.CLITextInput
            CLITextOutputDiv.innerHTML += 
                `
                <div class="container col-8 px-0">        
                <div class="CLI">
                        <p class="m-0 output-text"> 
                        <span>User</span>
                        <span>@</span>
                        <span >UsernoMacBook-Pro % ${this.CLITextInput}
                        </span>
                        </p>
                    <!-- </div> -->
                </div>
    
                `
                // + CLITextOutputDiv.innerHTML;
            this.CLITextInput = ""
            console.log(CLITextOutputDiv.innerHTML)
        }
    }
})
app.mount('#input')

// window.document.onkeydown = function(event){
//     if (event.key === 'Enter') {
//         CLITextOutputDiv.innerHTML = 
//         `
//         hello1
//         `
//         + CLITextOutputDiv.innerHTML;
//         console.log(CLITextOutputDiv.innerHTML);
//         return;
//     }
// }
// app.component('appendText' ,{
//     data() {
//         return{
//             CLITextInput: ""
//         }
//     },
//     methods: {
//         appendEchoParagraph:function(event, CLITextOutputDiv){
//             CLITextOutputDiv.innerHTML += 
//                 `
//                 hello
//                 `;
//             console.log(parentDiv.innerHTML);
//             return;
//         }
//     },
//     template:
//         `
//         <p class="m-0 output-text"> 
//         <span>User</span>
//         <span>@</span>
//         <span>UsernoMacBook-Pro</span> % {{ CLITextInput }}
//         </p>
//         `
// }).mount('#input')

// app.component('appendText' ,{
//     data: function(event) {
//         if (event.key == "Enter"){
//             CLITextOutputDiv.innerHTML += `<appendText></appendText>`
//             return
//         }
//     },
//         template:         
//         `
//         <p class="m-0 output-text"> 
//         <span>User</span>
//         <span>@</span>
//         <span>UsernoMacBook-Pro</span> % {{ CLITextInput }}
//         </p>
//         `
//     })

// document.onkeyup = submitSerch()
// function submitSerch(event){
//     if (event.key == "Enter"){
//         appendEchoParagraph()
//     }
// }

// submitSerch(event)
// var data = {
//     CLITextInput: ''
// }
// var vm = new Vue({ 
//     el: '#input',
//     data: data
// })
// Vue.component('appendText' ,{
//     data: function(event) {
//         if (event.key == "Enter"){
//             console.log(true)
//             return
//         }
//     },
//     template:         
//     `
//     <p class="m-0 output-text"> 
//     <span>User</span>
//     <span>@</span>
//     <span>UsernoMacBook-Pro</span> % {{ CLITextInput }}
//     </p>
//     `
// })
// vm.$data === data
// vm.$el === document.getElementById("input")

// new Vue({ el: '#input' })
// CLITextInput.addEventListener("keyup", (event) => submitSerch(event));