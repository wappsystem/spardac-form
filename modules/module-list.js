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
                            child_panel:"entry-design-data",
                            task_name:"Form Design",
    };                   
    m[p+"form-design-form"] ={url:H+"/form-grid/form-design/form-design-form.html",Table:"form-design-form-builder",task_name:"Form Design Details"},
    m[p+"panel-main"]=    	        {url:H+"/panels/main.html",router:1},
    m[p+"panel-child"]=              {url:H+"/panels/child.html"},

    m[p+"entry-design-data"]	={url:H+"/form-grid/form-design/entry-design-data.html",Table:"entry-design-form-builder",form_module:"entry-design-form",task_name:"Entry Design"},
    m[p+"entry-design-form"]	={url:H+"/form-grid/form-design/entry-design-form.html",Table:"entry-design-form-builder",task_name:"Entry Design"}

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
