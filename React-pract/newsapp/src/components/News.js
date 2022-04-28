import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const News=(props)=> 
{
 

    const[articles,setArticles]= useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalResults,setTotalResults]=useState(0);
  
   const capatalizefirstLetter =(string)=>
   {
     return string.charAt(0).toUpperCase()+string.slice(1);
   }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page:1,
  //     totalResults:0
  //   }
   
  
  useEffect(() => {
    document.title = `${capatalizefirstLetter(props.category)} - DailyNews`;
   updateNews()
    
  }, [])
  
  // async componentDidMount(){
  //  this.updateNews
  // }
  const updateNews=async()=>{
    props.setProgress(10); 
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json()
    props.setProgress(70);
    setArticles(parseddata.articles);
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    // this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
    props.setProgress(100);
  }
  const handleNextClick= async ()=>
  {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
    //   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6afdc30f902148d0a74db6e2ddddd83d&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    //   let data = await fetch(url);
    // let parseddata = await data.json()
    
    
    // this.setState({
    //   page:this.state.page + 1,
    //   articles:parseddata.articles,
    //   loading:false
    // })
    // }

    // this.setState({page:this.state.page + 1})
    setPage(page + 1);
    updateNews();
  }
  const handlePrevClick=async ()=>
  {
    // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6afdc30f902148d0a74db6e2ddddd83d&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parseddata = await data.json()
    
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parseddata.articles,
    //   loading:false
    // })
    // this.setState({page:this.state.page - 1});
    setPage(page-1);
    updateNews()
  }
   const fetchMoreData =async ()=>
   {
    // this.setState({page:this.state.page + 1});
    
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1);
    let data = await fetch(url);
    let parseddata = await data.json()
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
   }
    // this.setState({articles:articles.concat(parseddata.articles),totalResults:parseddata.totalResults})
     
return(
      
        <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top {capatalizefirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}

      
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
          <div className="row">
          { articles.map((element) => {
            return <div className="col-md-4" key ={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}
                newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>

          })}
         
        </div>
         </div>
        </InfiniteScroll>


          {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
      </>
    )
  
}

News.defaultProps={
    country:'in',
    pageSize:12,
    category:'general'
  }
News.propTypes={
    country :PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
export default News