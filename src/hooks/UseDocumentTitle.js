import { useEffect } from "react";


export default function UseDocumentTitle(title){
    useEffect(() => {
        // Manipulate the DOM directly
        //document.title = 'New Page Title';
      
        // Clean up on component unmount or when dependencies change
        
         document.title = title;
       
      });
      

}