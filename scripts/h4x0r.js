function build_codeblocks() {
    let blocks = document.querySelectorAll(".codeblock");
    blocks.forEach((el) => {
        linecount = el.innerHTML.split('\n').length;
        
    });
}