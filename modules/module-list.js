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
    m[p+"preview-form"]	={url:H+"/form-grid/form-design/preview-form.html",Table:"entry-design-form-builder",task_name:"Preview Form",form_module:"preview"}
    //m[p+"preview"]	={url:H+"/form-grid/form-design/preview.html"}
    m[p+"preview"]	={url:H+"/previewer"}

    m[p+"data-collection-configuration-data"] ={url:H+"/form-grid/data-collection-configuration/data-collection-configuration-data.html",Table:"data-collection-configuration-form-builder"
                            ,form_module:"data-collection-configuration-form",
                            participant:"participant-data",
                            sequence_panel:"sequence-form",
                            preview:"preview-form",
                            task_name:"Data Collection Configuration",
    };                   
    m[p+"data-collection-configuration-form"] ={url:H+"/form-grid/data-collection-configuration/data-collection-configuration-form.html",Table:"data-collection-configuration-form-builder",task_name:"Data Collection Configuration"},
    
    m[p+"participant-data"]	={url:H+"/form-grid/form-design/participant-form-data.html",Table:"participant-form-builder",form_module:"participant-form",task_name:"Participant form",    
        participant_entry_panel:"participant-entry-data",
        participant_sequence_panel:"participant-sequence-form",
        participant_preview:"participant-preview-form",
        task_name:"Participant Form",
    }
    m[p+"participant-form"]	={url:H+"/form-grid/form-design/participant-form-form.html",Table:"participant-form-builder",task_name:"Participant form",form_module:"form-design-form"}
    m[p+"participant-entry-data"]	={url:H+"/form-grid/form-design/participant-form-entry-data.html",Table:"participant-entry-form-builder",form_module:"participant-entry-form",task_name:"Participant form design"},
    m[p+"participant-entry-form"]	={url:H+"/form-grid/form-design/participant-form-entry-form.html",Table:"participant-entry-form-builder",task_name:"Participant form design"}

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
