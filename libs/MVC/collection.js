var collectionProduit =Backbone.Collection.extend({
  model:Produit,
  u:'http://localhost:8080/rest-sample/rest/produits',

  initialize:function(){

  },
  AddProduit:function(id){
     this.url=this.u+"/"+id;
         this.fetch();
  },
});
