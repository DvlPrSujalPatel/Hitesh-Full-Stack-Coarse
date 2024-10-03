function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post Data fetched")
        }, 2000);
    })
}

function fetchCommonData(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Comment data fetched successfully");
      }, 3000);
    });
}


async function getBlogData(){
    try {
        console.log("Fetching blog data");
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommonData()

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommonData()]);

        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");

    } catch (error) {
        console.log("Error fetching blog data", error);
    }
}

getBlogData()