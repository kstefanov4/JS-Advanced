import { getAllUserPosts } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const userPostsTemp = (posts) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            <div class="my-posts">
                ${posts.length == 0? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` : posts.map(postCard)}
            </div></section>`

//_id	_ownerId	title	description	address	phone	imageUrl	_createdOn

        function postCard(post){
            return html`
                <div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img class="post-image" src="../..${post.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/dashboard/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`
        }

export async function userPostsView(ctx) {
    const userData = getUserData();
    const posts = await getAllUserPosts(userData?.id);
    ctx.render(userPostsTemp(posts));

}