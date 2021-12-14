exports.handler = async (event) => {
  console.log("Received event: " + JSON.stringify(event));
  let month;
  let author;

  if (event.queryStringParameters && event.queryStringParameters.month) {
    console.log("Received month: " + event.queryStringParameters.month);
    month = event.queryStringParameters.month;
  }

  // TODO: add the year as a query parameter

  if (event.headers && event.headers.author) {
    console.log("Received author: " + event.headers.author);
    author = event.headers.author;
  }

  let responseBody = getBlogPosts();

  // TODO: filter the posts by month

  // TODO: filter the posts by author

  let response = {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  };
  console.log("Return: " + JSON.stringify(response))
  return response;
};

const getBlogPosts = () => {
  return [
    {
      author: 'Sherlock Holmes',
      date: '03-03-2021',
      title: 'My latest discovery',
      body: 'I\'m baby cred artisan stumptown shaman whatever unicorn. Plaid authentic offal, scenester distillery sartorial PBR&B keffiyeh fixie chia hell of drinking vinegar farm-to-table poke shoreditch. Street art quinoa chartreuse, retro woke waistcoat health goth lo-fi post-ironic fingerstache af keytar. Pour-over seitan VHS iceland, migas quinoa 8-bit. Raclette messenger bag synth man braid flannel yr, adaptogen austin freegan kombucha normcore. Subway tile knausgaard asymmetrical roof party, gastropub salvia gentrify chia flannel migas poke four loko coloring book etsy. Kitsch chicharrones raclette lo-fi poke.'
    },
    {
      author: 'Sherlock Holmes',
      date: '15-05-2021',
      title: 'What I think about Elon Musk',
      body: 'I\'m baby cred artisan stumptown shaman whatever unicorn. Plaid authentic offal, scenester distillery sartorial PBR&B keffiyeh fixie chia hell of drinking vinegar farm-to-table poke shoreditch. Street art quinoa chartreuse, retro woke waistcoat health goth lo-fi post-ironic fingerstache af keytar. Pour-over seitan VHS iceland, migas quinoa 8-bit. Raclette messenger bag synth man braid flannel yr, adaptogen austin freegan kombucha normcore. Subway tile knausgaard asymmetrical roof party, gastropub salvia gentrify chia flannel migas poke four loko coloring book etsy. Kitsch chicharrones raclette lo-fi poke.'
    },
    {
      author: 'Sherlock Holmes',
      date: '21-06-2021',
      title: 'How does blockchain work?',
      body: 'I\'m baby cred artisan stumptown shaman whatever unicorn. Plaid authentic offal, scenester distillery sartorial PBR&B keffiyeh fixie chia hell of drinking vinegar farm-to-table poke shoreditch. Street art quinoa chartreuse, retro woke waistcoat health goth lo-fi post-ironic fingerstache af keytar. Pour-over seitan VHS iceland, migas quinoa 8-bit. Raclette messenger bag synth man braid flannel yr, adaptogen austin freegan kombucha normcore. Subway tile knausgaard asymmetrical roof party, gastropub salvia gentrify chia flannel migas poke four loko coloring book etsy. Kitsch chicharrones raclette lo-fi poke.'
    },
  ]
}
