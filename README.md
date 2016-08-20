# P2Pool donation button

Fetches addresses and amounts from P2Pool's `patron_sendmany`.

## Requirements

* [jQuery](https://jquery.com/)

## Installation

### JavaScript libraries

Obtain `jquery.min.js` and `p2pool-donation.min.js`.

Insert

    <script type="text/javascript" src="link/to/jquery.min.js"></script>
    <script type="text/javascript" src="link/to/p2pool-donation.min.js"></script>

into the `head` section of the webpage, adjusting the paths.

### Button placeholder

Insert

    <div id="p2pool-donation"></div>

where you want the button to appear. Use `<span>` for inline alignment.

### Activation code

Insert

    <script type="text/javascript">
        $(document).ready(function () {
            var button = new P2PoolDonationButton({id: "p2pool-donation", url: "http://your.address:9332/"});
            button.create();
        });
    </script>

into the `head` section of the webpage, adjusting the address
(keep the trailing slash at the end).

#### Parameters

* `id` \*: ID of the placeholder.
* `url` \*: Base URL of P2Pool's web interface. If the button appears on
    P2Pool's stats page the URL can simply be `"/"`.
* `coin`: Displayed currency. `"BTC"` by default.
* `min`: Minimum donation amount. `0.001` by default.

\* required