// import { BsSearch } from 'react-icons/bs'
import { BsFileMinus, BsFillClipboard2PlusFill } from 'react-icons/bs';
import Search from '../../components/common/Search';
import { useLazyGetSummaryQuery } from '../../services/article';
import { useState, useEffect } from 'react';
function Home() {

    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");


    // RTK lazy query
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    // Load data from localStorage on mount
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem("articles")
        );

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingArticle = allArticles.find(
            (item) => item.url === article.url
        );

        if (existingArticle) return setArticle(existingArticle);

        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
    };

    // copy the url and toggle the icon for user feedback
    const copyToClipBoard = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(false), 3000);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };

    function gotoWebsite(url) {
        window.open(url, '_blank');
    }

    function deleteFromLocalStorage(url) {
        // Retrieve items from local storage
        const storedItems = JSON.parse(localStorage.getItem('articles'));

        // Filter out the item with the specified URL
        const updatedItems = storedItems.filter((item) => item.url !== url);

        // Update the local storage with the updated items
        localStorage.setItem('articles', JSON.stringify(updatedItems));

        // Update the state in your app
        setAllArticles(updatedItems);

    }


    function onChangeFunc(e) {
        setArticle({ ...article, url: e.target.value })
    }


    return (
        <div className="grid grid-rows-[auto,auto,1fr,auto] gap-4 px-5 md:px-20 py-10 items-center  w-[95%] md:w-[85%] m-auto ">
            <div className="w-full flex flex-col items-center gap-6 text-center">
                <div className='text-2xl px-5 md:px-10'>Turn Long <span className='text-blue-600'>Post</span> and <span className='text-orange-500'>Article</span> Into<span className='text-blue-800 p-2'>Simple Understandable Texts</span></div>
                <div className='text-gray-600 font-extralight px-4 md:px-40 '>Using AI to compress long text into small understandable summery of
                    any blog post, article or get information on what any website is all about,
                    All you need is the link of the website.
                </div>
                <Search onChangeFunc={onChangeFunc} on_keydown={handleKeyDown} />
            </div>

            <div>
                <div className='capitalize my-4'>Last summery</div>
                <div className=''></div>
            </div>



            {/* Display Result */}
            <div className='my-2 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <div>Getting Data</div>
                ) : error ? (
                    <p className='font-inter font-bold text-black text-center'>
                        Hmm sorry
                        <br />
                        <span className='font-satoshi font-normal text-gray-700'>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3 p-4 bg-white shadow-2xl rounded-lg'>
                            <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                                Article <span className='blue_gradient'>Summary</span>
                            </h2>
                            <div className='summary_box'>
                                <p className='font-inter font-medium text-sm text-gray-700'>
                                    {article.summary}
                                </p>
                                <button onClick={() => gotoWebsite(article.url)} className='my-4 text-sm text-white bg-orange-500 rounded-2xl py-1 px-4 cursor-pointer'>
                                    Visit Url
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3   gap-3 '>


                {
                    allArticles.map((e, i) => (
                        <div className='p-3  rounded  shadow-lg hover:shadow-none bg-[#ffffffc2]' key={i + e.url}>
                            <div className='mb-2 text-gray-600'>23 june 2023</div>
                            <div className='line-clamp-4 mb-2'>
                                {e.summary}
                            </div>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => gotoWebsite(e.url)} className='my-4 text-sm text-white bg-orange-500 rounded-2xl py-1 px-4 cursor-pointer'>
                                    Visit Url
                                </button>
                                <div className='flex items-center gap-4'>
                                    <button onClick={() => copyToClipBoard(e.summary)}>
                                        <BsFillClipboard2PlusFill size={25} color={'gray'} />
                                    </button>

                                    <button onClick={() => deleteFromLocalStorage(e.url)}>
                                        <BsFileMinus size={25} color={'#f07a7a'} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>




        </div>

    );
}

export default Home;