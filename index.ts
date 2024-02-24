import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "John Doe 2",
  //       email: "john2@example.com",
  //     },
  //   });

  // Get all users
  //   const users = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   });

  // Create post associate with user
  //   const post = await prisma.post.create({
  //     data: {
  //       title: "John First Post",
  //       body: "this is Johns first post",
  //       published: true,
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });

  // Get all posts
  const posts = await prisma.post.findMany();

  // Create user and posts and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Sara Smith",
  //       email: "sara@example.com",
  //       posts: {
  //         create: {
  //           title: "Saras First Post",
  //           body: "This is Sarahs first post",
  //           published: true,
  //         },
  //       },
  //     },
  //   });

  // Create another post
  //   const post = await prisma.post.create({
  //     data: {
  //       title: "Sample Post",
  //       body: "This is a sample post",
  //       published: true,
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  // Loop over Saras posts
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log(`Posts:`);
  //     user.posts.forEach((post) => {
  //       console.log(
  //         `- Title: ${post.title}, Body: ${post.body}, Published: ${post.published}`
  //       );
  //     });
  //     console.log("\n");
  //   });

  // Update data
  //   const user = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "John Doe Jr.",
  //     },
  //   });

  // Remove data
  //   const post = await prisma.post.delete({
  //     where: {
  //       id: 2,
  //     },
  //   });

  console.log(posts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
