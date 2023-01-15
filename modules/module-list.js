(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"form-design-data"] ={url:H+"/form-grid/form-design/form-design-data.html",Table:"form-design-form-builder"
                            ,form_module:"form-design-form",
                            design_panel:"entry-design-data",
                            sequence_panel:"sequence-form",
                            preview:"preview-form",
                            task_name:"Form Design",
    };                   
    m[p+"form-design-form"] ={url:H+"/form-grid/form-design/form-design-form.html",Table:"form-design-form-builder",task_name:"Form Design Details"},
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1},
    m[p+"panel-child"]=              {url:H+"/panels/child.html"},

    m[p+"entry-design-data"]	={url:H+"/form-grid/form-design/entry-design-data.html",Table:"entry-design-form-builder",form_module:"entry-design-form",task_name:"Entry Design"},
    m[p+"entry-design-form"]	={url:H+"/form-grid/form-design/entry-design-form.html",Table:"entry-design-form-builder",task_name:"Entry Design"}

    m[p+"sequence-form"]	={url:H+"/form-grid/form-design/sequence-form.html",Table:"entry-design-form-builder",task_name:"Sequencing Inputs"}
    m[p+"preview-form"]	={url:H+"/form-grid/form-design/preview-form.html",Table:"entry-design-form-builder",task_name:"Preview Form - ",form_module:"preview"}
    //m[p+"preview"]	={url:H+"/form-grid/form-design/preview.html"}
    m[p+"preview"]	={url:H+"/previewer"}

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
