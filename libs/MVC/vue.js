var ProduitView=Backbone.View.extend({
el:$("#idListProduits"),

events: {
    "click #listId" : "submit"
},

initialize : function () {
  console.log("hello");
        this.template = _.template($("#idAfficher").html());
        this.collection =new collectionProduit();

        //On ecoute sur la collection, then faire le render
                     },
render : function () {
                var renderedContent = this.template({
                  produits: this.collection.toJSON()
                                                   });
          $("#idAfficher_v").html(renderedContent);
          return this;
        },
        submit:function(){
            console.log('signin');
           var id=this.$('#id').val();

        this.collection.AddProduit(id); // tab[i]
        //   console.log(ObjProduit.Marque)

      },


});
