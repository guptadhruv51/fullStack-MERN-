export const renderNotes=(notes)=>
{
    let newNote=notes.map(({id,title,note,isPinned,isArchived})=>
    {
      return (
        `<div class="single-note shadow">
        <div class="d-flex align-center title-container">
        <span class="single-note-title">${title}</span>
        <button class="button del-btn v-hidden data-type="del" data-id=${id}>
        <span data-type="del" data-id=${id} class="material-icons-outlined">
        delete
        </span>
        </button>
        </div>
        <p>${note}</p>
        <div class="options d-flex gap-md">
        <button data-type="pinned" class="button btn pinned-btn v-hidden" data-id=${id}>
        <span data-type="pinned" class=${isPinned?"material-icons":"material-icons-outlined"} data-id=${id}>
          push_pin
          </span>
          </button>
        <button data-type="archive" class="button btn pinned-btn v-hidden" data-id=${id}>
        <span data-type="archive" class="material-icons-outlined" data-id=${id}>
          archive
        </span>
        </button>
        </div>
        </div>`
      )
    });
    newNote=newNote.join("");
    return newNote;
}