async function fetchWordPressPosts() {
    const res = await fetch('https://wordpress-1339093-4908980.cloudwaysapps.com/wp-json/wp/v2/pages');
  
    if (!res.ok) {
      throw new Error("Error fetching WordPress data");
    }
    return res.json();
  }
  
  export default async function WordPressPage() {
    const pages = await fetchWordPressPosts();
    console.log(pages);
  
    return (
      <div className="flex items-center w-full h-full p-10">
        <ul className="space-y-10">
          {pages.map((page) => (
            <li key={page.id}>
              <h2 className="text-2xl font-bold">{page.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </li>
          ))}
        </ul>
      </div>
    );
  }