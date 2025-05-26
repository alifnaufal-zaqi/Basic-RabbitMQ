const amqp = require("amqplib");

const init = async () => {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const queue = "Dicoding";
  const message = "Selamat Belajar Message Broker!";

  await channel.assertQueue(queue, {
    durable: true,
  });

  channel.sendToQueue(queue, Buffer.from(message));
  console.log("Pesan berhasil dikirim");

  setTimeout(() => {
    connection.close();
  }, 1000);
};

init();
