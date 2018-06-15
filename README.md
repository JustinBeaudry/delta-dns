∆DNS
====

A Recursive Resolver DNS in Node.js

## Why?

For fun and for learning.

## Is this something I should use?

Probably not.

## Installation

`npm i -g ∆dns`

## How DNS Works

### RFC's

* https://tools.ietf.org/html/rfc1034
* https://tools.ietf.org/html/rfc1035
* https://tools.ietf.org/html/rfc2181
* https://tools.ietf.org/html/rfc2671

### Domains
#### Top-Level Domain (TLD)
There are generally two kinds:

* Generic TLDs
  * .com
  * .net
  * .org
* Country Code TLDs
  * .uk
  * .de

#### Second-Level Domain
Unique part of the domain name. Specific to the TLD.

#### Third-Level Domain (subdomain)
Most commonly `www`, but can also take other forms.
Each subdomain is unique for the Second-Level Domain

### DNS Resolution
1. Type web address into browser e.g. google.com
2. Computer queries the Recursive Resolver DNS
3. If the Recursive Resolver does not have the address, query the root DNS name servers
4. Root name servers refer the Recursive Resolver to the appropriate TLD name server
5. The TLD name server refers the Recursive Resolver to the appropriate authoritative name server

### Recursive Name Server
### Root Server
### TLD Name Server
### Name Server
