   function getUser(callback) {
            setTimeout(() => {
                console.log("✅ Got user");
                if (callback) callback(null, { id: 1, name: "John" });
            }, 1000);
        }

        function getPosts(userId, callback) {
            setTimeout(() => {
                console.log("✅ Got posts for user", userId);
                if (callback) callback(null, ["Post1", "Post2"]);
            }, 1000);
        }

        function getComments(post, callback) {
            setTimeout(() => {
                console.log(`✅ Got comments for ${post}`);
                if (callback) callback(null, ["Comment1", "Comment2"]);
            }, 1000);
        }

        // Promise versions
        function getUserPromise() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("✅ Got user");
                    resolve({ id: 1, name: "John" });
                }, 1000);
            });
        }

        function getPostsPromise(userId) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("✅ Got posts for user", userId);
                    resolve(["Post1", "Post2"]);
                }, 1000);
            });
        }

        function getCommentsPromise(post) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`✅ Got comments for ${post}`);
                    resolve(["Comment1", "Comment2"]);
                }, 1000);
            });
        }

        // --------------------
        // 1. Callback Hell
        // --------------------
        console.log("=== CALLBACK HELL ===");
        getUser((err, user) => {
            if (err) return console.error(err);
            getPosts(user.id, (err, posts) => {
                if (err) return console.error(err);
                getComments(posts[0], (err, comments) => {
                    if (err) return console.error(err);
                    console.log("Comments:", comments);
                });
            });
        });

        // Run promises after delay to avoid mixing logs
        setTimeout(() => {
            // --------------------
            // 2. Promises (.then / .catch)
            // --------------------
            console.log("\n=== PROMISES ===");
            getUserPromise()
                .then(user => getPostsPromise(user.id))
                .then(posts => getCommentsPromise(posts[0]))
                .then(comments => console.log("Comments:", comments))
                .catch(err => console.error(err));
        }, 4000);

        // Run async/await after delay
        setTimeout(async () => {
            // --------------------
            // 3. Async / Await
            // --------------------
            console.log("\n=== ASYNC / AWAIT ===");
            try {
                const user = await getUserPromise();
                const posts = await getPostsPromise(user.id);
                const comments = await getCommentsPromise(posts[0]);
                console.log("Comments:", comments);
            } catch (err) {
                console.error(err);
            }
        }, 8000);
