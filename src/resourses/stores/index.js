import mobx , { observable, action , computed} from 'mobx';


export default class store {
  @observable state = null ; 
  @observable hehe = null;
  @observable articleList = [1] ; 

  @action.bound
  updateState(state) {
    this.state = this.state != state ? state: this.state;
  }

  @action.bound 
  updateArticleList(list) {
    this.articleList = this.articleList != list ? list: this.articleList;
  }

  @action.bound 
  async  fetchData() {
    const that = this;
    const step = await new Promise(function(resolve, reject){
      setTimeout(function(){ resolve([1,2,3,4,5])}, 1000);
    }).then(function(data){
      that.updateArticleList(data);
    });
  }

  @computed 
  get articleListItems() {
    return this.articleList.map(function(key){
      return key * 1;
    });
  }

  @computed
  get articleContent() {
    console.log(this.state);
    return this.state;
  }
}
