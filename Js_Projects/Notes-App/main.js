import { renderNotes } from "./app.js";
let note=document.querySelector(".note");
let title=document.querySelector(".title");
let addNoteBtn=document.querySelector(".add-btn");

let notesDisplay=document.querySelector(".notes-display");
let showOtherNotes=document.querySelector(".notes-container");
let showPinnedNotes=document.querySelector(".pinned-notes-container");
let pinTitle=document.querySelector(".pin-title");
let otherTitle=document.querySelector(".other-title");
let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || [];

if(arrayOfNotes.length>0)
{
  pinTitle.classList.toggle("d-none");
  otherTitle.classList.toggle("d-none");
}
notesDisplay.addEventListener("click",(event)=>
{
  let type=event.target.dataset.type;
  let noteId=event.target.dataset.id;
  let pinnedNote;
    console.log({type,noteId});
    switch (type)
    {
      case "del":
        arrayOfNotes = arrayOfNotes.filter(({ id }) => id.toString() !== noteId);
        showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned,isArchived }) => !isPinned && !isArchived));
        showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({ isPinned }) => isPinned));
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
      break;
      case "pinned":
      // pinnedNote=arrayOfNotes.filter(({id})=>id.toString()==noteId);
      // showPinnedNotes.innerHTML=renderNotes(pinnedNote);
      // arrayOfNotes=arrayOfNotes.filter(({id})=>id.toString()!==noteId);
      // showOtherNotes.innerHTML=renderNotes(arrayOfNotes);
      arrayOfNotes=arrayOfNotes.map(note=>note.id.toString()===noteId?{...note, isPinned:!note.isPinned}:note);
      // console.log(arrayOfNotes);
      showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=>!isPinned && !isArchived))
      showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned})=>isPinned))
      localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
      break;
      case "archive":
        arrayOfNotes=arrayOfNotes.map(note=>note.id.toString()===noteId?
              {...note, isArchived:!note.isArchived}:note);
        console.log(arrayOfNotes)
        showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=>!isPinned && !isArchived));
        showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=>isPinned && !isArchived));
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes));

    }
    
})

addNoteBtn.addEventListener("click",(event)=>
{
  // event.preventDefault();
  // console.log(note.value);
  // console.log(title.value);
  if(note.value.trim().length>0 || title.value.trim().length>0)
  {
    arrayOfNotes=[...arrayOfNotes,{id:Date.now(),title:title.value.trim(),
      note:note.value.trim(),isPinned:false, isArchived:false}]
  }
  showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned})=>!isPinned));
  localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
  note.value="";
  title.value="";
 // console.log(arrayOfNotes);

});



showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=>!isPinned&&!isArchived));
showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned})=>isPinned ));