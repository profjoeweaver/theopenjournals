tinymce.init({
    selector: 'textarea#editor',
    height: 300,
    menubar: false,
    plugins: [
        'advlist', 'autolink',
        'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
        'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'

    ],
    toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
        'alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
    setup: function(editor){
        editor.on('init', function(e){
            editor.setContent('<p>You can paste, write in Markdown, or use the toolbar for formatting</p>')
        });
    }
});