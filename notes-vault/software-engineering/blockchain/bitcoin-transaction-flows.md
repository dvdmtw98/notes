---
title: Bitcoin Transaction Flows
tags:
  - blockchain
  - cryptography
date: 2024-09-12 11:41:48 -0500
updated: 2024-09-12 12:45:49 -0500
---

#### Buying from Friend

Alice decides to buy 0.001 BTC from Joe  
Alice and Joe check the exchange rates and come to a consensus  
Alice gives Joe the appropriate amount in cash  

Alice opens her digital wallet and clicks on Receive  
An QR code is display (contains Alice’s bitcoin address)  
Joe selects Send on this wallet application and scans Alice’s QR code  

![[bitcoin-transaction-mobile.png|340]]

This sets Alice as recipient for Joe. Joe enters the amount to be sent (0.001 BTC)  
The amount to be sent may be shown in a different units (mBTC, sats, etc.)  
The wallet app may ask Joe to add an label to the transaction  
Joe’s wallet will also prompt for transaction fee (Higher fee faster confirmation)  

Joe checks all the details and clicks on Send  
Joe’s wallet constructs a transaction that assigns 0.001 BTC to Alice’s address  
The funds are sources from Joe’s wallet and is signed using his Private Key  
This transaction will quickly propagate through the bitcoin network  
The blockchain network sees Alice’s address for the first time  

Alice’s wallet will show an transaction of 0.001 BTC in “Unconfirmed” state  
Once transaction is incorporated into the blockchain its will become “Confirmed”  
This is similar to the Clearing functionality in traditional transactions  

#### Buying from Online Store

Alice wants to buy Bob’s podcast. Bob accepts payments in Bitcoins  
Bob’s website creates an QR code invoice 

![[invoice-qr-code.png|200]]

![[bitcoin-invoice-qr-code.png|540]]

A invoice is different from a Bitcoin address  
Invoices are encoded URI that wallet apps can use to pre-fill fields  
Invoice contains destination address, payment amount, label and description  

Alice scans the QR code. Verifies the information that is auto-populated  
Alice authorizes the payment  
After a few seconds Bob will see the transaction on his register  
