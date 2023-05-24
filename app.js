main=document.querySelector("main")
add_new_card_btn=document.querySelector("#add_new_card")

note_no_main=0
//note_id="-1"
all_notes="-1"

textarea_html=`<textarea id="keyboard_textarea" placeholder="Write your text here. Click on Add New button below to add a new block."></textarea>
`



card_html=`
    <div class="card_toolbar"> 
        <div id="card_toolbar_name"> </div>
        
        <div class="card_toolbar_buttons">
            <i  id="save" class="toolbar_icons fa-solid fa-save"></i>
            <i  id="download" class="toolbar_icons fa-solid fa-download"></i>               
            <i  id="space" class="toolbar_icons fa-solid fa-space"></i>               
            <i  id="delete_card" class="toolbar_icons fa-solid fa-trash"></i>               
        </div>
    </div>  
    
    <div class="card">     

    <div id="keyboard_block">   
        ${textarea_html}
    </div>
    
    <div id="insert_new_blocks_here"></div>



        <div class="toolbar_and_spacer">
            <div class="toolbar">
                <div id="add_new_block">    
                    Add New
                </div>                               
            </div>
        </div>
        
    </div>
`

let rand_str=()=>{
    let a=(Math.random()*10).toString(36)
    //a+=(Math.random()*100)
    return a
}

let create_note=function(){
    let card_holder=document.createElement("div")
    card_holder.classList.add("card_holder")
    card_holder.innerHTML=card_html
    main.appendChild(card_holder)///building the elements so that the next query selectors can find it 

    note_no_main+=1
    let note_no=note_no_main
    let note_id=rand_str()
    console.log("new note created with note_no: "+note_no+" note_id: " +note_id)

    card_holder.querySelector("#card_toolbar_name").innerHTML="New note "+note_no

    card_holder.querySelector("#add_new_block").addEventListener("click",
    function(){
        let kb_block=document.createElement("div")
        kb_block.setAttribute("id","keyboard_block")

        kb_block.innerHTML=textarea_html
        card_holder.querySelector("#insert_new_blocks_here").appendChild(kb_block)

        console.log("add_new_block done in note_no: "+note_no+" note_id: " +note_id)
    })

    save_btn= card_holder.querySelector("#save")
    save_btn.addEventListener("click",
    function(){
        console.log("save done in note_no: "+note_no+" note_id: " +note_id)
    })

    download_btn= card_holder.querySelector("#download")
    download_btn.addEventListener("click",
    function(){
        console.log("download done in note_no: "+note_no+" note_id: " +note_id)
    })

    delete_card_btn= ""
    card_holder.querySelector("#delete_card").addEventListener("click",
    function(){
        card_holder.remove()
        note_no_main-=1
        console.log("delete_card done in note_no: "+note_no+" note_id: " +note_id)
    })

    
    //main.appendChild(card_holder)

}

add_new_card_btn.addEventListener(
    "click", function(){
        create_note()
    }
)

create_note()