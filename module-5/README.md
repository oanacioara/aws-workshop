# Create an API with API Gateway
### Overview of API Gateway
"Amazon API Gateway is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale." [[doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)]

API Gateway provides a way for you to expose your backend via an API that can then be used by a frontend application. API Gateway is just the layer in front of your Lambda, EC2, ECS that provides the routes and the DNS of your API.

In this workshop we will be integrating API Gateway with Lambda. The result will be as depicted in the image bellow.

![img.png](imgs/api-gateway.png)
### Creating an API Gateway

#### Via Console
1. Go to API Gateway
![img.png](imgs/api-gateway-create-start.png)
2. Under **REST API** choose **Build** <br>
![img.png](imgs/api-gateway-create-s1.png)
3. Configure as follows. You can use any API name you want.
![img.png](imgs/api-gateway-create-s2.png)
4. Click on **Create API**
5. You should see a screen similar to this one
![img.png](imgs/api-gateway-empty.png)
#### Configure a route and link it to a Lambda
Your API Gateway is now created, but it has no routes and it is not linked to any Lambda. In order to do that we need to go over the following steps.

**_Prerequisite_:**
You first need to create a Lambda. Details about how to do this can be found in [module-4](../module-4/README.md). Feel free to review that if you need to, but to speed things up we will be using the following commands.
```shell
chmod +x scripts/create-role.sh
chmod +x scripts/create-lambda.sh

./scripts/create-role.sh blog-posts-GET // get the ACCOUNT_ID
./scripts/create-lambda blog-posts-GET <ACCOUNT_ID> GET
```
You should see that a Lambda function with the name `blog-posts-GET` was created.

#### Via Console
1. From the **Actions** drop-down select **Create Resource**
![img.png](imgs/resource-start.png)
2. Set the resource name and leave all other configuration as default
![img.png](imgs/resource-s1.png)
3. Click on the newly created resource and from the **Actions** drop-down select **Create Method**
![img.png](imgs/method-start.png)
4. Select GET <br>
![img.png](imgs/method-s1.png)
5. Configure your method as follows and click **Save**
![img.png](imgs/method-s2.png)
6. Once your API Gateway is configured you now have to deploy it. The changes will not be visible for external use unless you deploy. To do that select **Deploy API** from the **Actions** drop-down.
![img.png](imgs/deploy-start.png)
7. Next, give your stage a name and description and click **Deploy**.
![img.png](imgs/deploy-s1.png)
8. You should now be able to see your API URL
![img.png](imgs/api-url.png)

To make sure your API is working open a browser tab and call `<API_URL>/blogposts`. You should see the array of blog posts in the response.
### Make an API call from website
