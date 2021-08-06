(() => {
   class Accordion{

        //初期化
        constructor(obj){

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
        
            const triggerLen = $trigger.length;
            let index = 0;
            while(index < triggerLen){
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }
        
        //クリックしたら実行される処理
            clickHandler = (e) => {
             e.preventDefault();
        
             const $target = e.currentTarget;
             const $content = $target.nextElementSibling;
             if($content.style.display === 'block'){
                    $content.style.display = 'none';
             } else {
                 $content.style.display = 'block';
             }
         }
    
    }

    //インスタンス
    const aibouAccordion = new Accordion({
        hookName: '#js-accordion-1',
        tagName: 'a'    
    });

    const aibou2Accordion = new Accordion({
        hookName: '#js-accordion-2',
        tagName: 'a'    
    });
    
    const aibou3Accordion = new Accordion({
        hookName: '#js-accordion-3',
        tagName: 'a'    
    }); 


})();