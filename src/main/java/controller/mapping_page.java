package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class mapping_page {

      @GetMapping("/index")
    public String index(){
        return "index";
    }


    @GetMapping("/pag_1")
    public String pagina1(){
        return "pag_1";
    }

    @GetMapping("/pag_2")
    public String pagina2(){
        return "pag_2";
    }



    
}
