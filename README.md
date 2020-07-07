# Amadeus-Shop-Express

-----Sign up----
POST: /api/auth/register (x-www-form-urlencoded)
	email
	username
	password

----Sign in-----
POST: /api/auth/login (x-www-form-urlencoded)
	email
	password

----Reset Password----
POST: /api/auth/recover (x-www-form-urlencoded)
	email


----Refresh Token----
POST: /api/auth/refreshtoken (x-www-form-urlencoded)
	email
	token(refresh token)

----Sign out----
DELETE: /api/auth/logout (x-www-form-urlencoded)
	token(refresh token)


----auth: bearer token------Gửi kèm token------------


----Change Password----
POST: api/user/changepassword
	password
	newpassword


-----Update Profile----
PUT: /api/user/update (x-www-form-urlencoded)----profile------
	nickname
	numphone
	sex
	datebirth
	address

----Update Profile Image------
PUT: /api/user/update (form-data)---profile image-----
	file

-----Show user info-----
GET: /api/user/show (x-www-form-urlencoded)

-----Display Image-------
GET: /api/user/image/:filename


-------Cart-------

------Create or Add to Cart-----

PUT: /api/cart/items
	productId
	count

------Show  An Item----
POST: /api/cart/itemshowone
	id (id của 1 item trong cart)

------Show All Item in Cart-----
GET: /api/cart/itemshowall
	
------Destroy An Items-----
DELETE: /api/cart/destroyitem 
	id (id của 1 item trong cart)

------Destroy All Items in Cart-----
DELETE: /api/cart/destroycart

------Login Facebook----
GET: /auth/facebook (đưa api này vào button facebook login)

-----> Xác thực thành công sẽ chuyển tới api callback: /auth/facebook/callback ----> nhận id của user

------Show Info Facebook User----
POST: /api/social/fblogin
	id(id user nhận được khi xác thực FB thành công)


-----Login Admin------
POST: /api/auth/admin/login
	username: admin
	password: 123456

-----Show all User Info----
GET: /api/admin/showalluser