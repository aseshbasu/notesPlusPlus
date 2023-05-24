main=document.querySelector("main")
add_new_card_btn=document.querySelector("#add_new_card")

note_no_main=0
//note_id="-1"
all_notes="-1"

card_html=`
    <div class="card_toolbar"> 
        <div class="card_toolbar_name">            
            New note        
        </div>
        
        <div class="card_toolbar_buttons">
        <i  id="save" class="toolbar_icons fa-solid fa-save"></i>
        <i  id="download" class="toolbar_icons fa-solid fa-download"></i>               
        <i  id="space" class="toolbar_icons fa-solid fa-space"></i>               
        <i  id="delete_card" class="toolbar_icons fa-solid fa-trash"></i>               
        </div>
    </div>  
    
    <div class="card">        
        <div class="keyboard_block">
            <textarea id="keyboard_textarea" placeholder="Write your text here. Click on Add New button below to add a new block."></textarea>
            <div class="blocktoolbar">
            <i  id="delete_block" class="blocktoolbar_icons fa-solid fa-trash"></i>
            <i  id="duplicate_block" class="blocktoolbar_icons fa fa-files-o"></i>
            </div>
        </div>
        
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
    card_holder=document.createElement("div")
    card_holder.classList.add("card_holder")
    card_holder.innerHTML=card_html
    main.appendChild(card_holder)///building the elements so that the next query selectors can find it 

    note_no_main+=1
    let note_no=note_no_main
    let note_id=rand_str()
    console.log("new note created with note_no: "+note_no+" note_id: " +note_id)

    add_new_block_btn= card_holder.querySelector("#add_new_block")
    add_new_block_btn.addEventListener("click",
    function(){
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

    delete_card_btn= card_holder.querySelector("#delete_card")
    delete_card_btn.addEventListener("click",
    function(){
        console.log("delete_card done in note_no: "+note_no+" note_id: " +note_id)
    })

    delete_block_btn= card_holder.querySelector("#delete_block")
    delete_block_btn.addEventListener("click",
    function(){
        console.log("delete_block done in note_no: "+note_no+" note_id: " +note_id)
    })

    duplicate_block_btn= card_holder.querySelector("#duplicate_block")
    duplicate_block_btn.addEventListener("click",
    function(){
        console.log("duplicate_block done in note_no: "+note_no+" note_id: " +note_id)
    })



    //main.appendChild(card_holder)

}

add_new_card_btn.addEventListener(
    "click", function(){
        create_note()
    }
)

create_note()