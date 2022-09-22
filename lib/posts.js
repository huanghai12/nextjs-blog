import fs from 'fs';
import path from 'path';//
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
// process.cwd()是当前Node.js进程执行时的根目录 ,保证了文件在不同的目录下执行时，路径始终不变
// 拼接路径：找到项目根目录下的posts文件夹
const postsDirectory = path.join(process.cwd(), 'posts');
export async function getPostData(id){
  // 拼接路径
  const fullPath = path.join(postsDirectory,`${id}.md`);
  // 读取文件内容
  const fileContents = fs.readFileSync(fullPath);
  // 解析读取出来的数据
  const matterResult = matter(fileContents);
  // 使用remark
  const processedContent = await remark()
  .use(html).process(matterResult.content)
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}

export function getAllPostIds(){

 
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id:fileName.replace(/\.md$/,'')
      }
    }
  })
}
export function getSortedPostsData() {
    // 使用fs读取该路径下的文件夹中所有的文件名称,是一个字符串数组
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 数组中的字符串取出来，并去掉.md
    const id = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    // 拼接数据文件的路径
    const fullPath = path.join(postsDirectory, fileName);
    // 通过拼接的路径读取文件中的数据
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    // 解析.md文件中带有front-matter的字符串
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}