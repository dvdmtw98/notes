---
tags: [rust, programming, control-flow]
---

Match is used to define what action to perform for different variants of an Enum  
When using Match all the variants have to be handled (Exhaustive Match)

```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

let coin = Coin::Quarter;
println!("Coin Value: {}", value_in_cents(coin));
```

> [!NOTE] Match vs. If Statement
> With if statement the condition to be evaluated has to be a Boolean with match the condition can be of any type  

Match can also be used to match on patterns that bind to values. Using pattern binding we can extract values from Enums

```rust
#[derive(Debug)]
enum IpAddressKind {
    V4(String),
    V6(String),
}

fn extract_ip_address_values(ip_address: IpAddressKind) -> String {
    match ip_address {
        IpAddressKind::V4(ip) => {
            println!("IPv4 Address");
            ip
        }
        IpAddressKind::V6(ip) => {
            println!("IPv6 Address");
            ip
        }
    }
}

fn main() {
    let localhost = IpAddressKind::V4(String::from("127.0.0.1"));
    let loopback = IpAddressKind::V6(String::from("::1"));
    println!(
        "IPv4 Address Value: {}",
        extract_ip_address_values(localhost)
    );
    println!(
        "IPv6 Address Value: {}",
        extract_ip_address_values(loopback)
    );
}
```

`_` is a placeholder used in match statements to denote all the conditions

```rust
let dice_roll = 9;
match dice_roll {
	3 => add_fancy_hat(),
	7 => remove_fancy_hat(),
	_ => reroll(),
}

```

### if let Statement

The if let syntax can be used if we are only interested in one of the variants of the Enum and we want to ignore the rest of the conditions (Shorthand for match statement)  

```rust

let config_max = Some(3);
if let Some(max) = config_max {
	println!("The maximum is configured to be {}", max);
}
```

The value on the right of the `=` is being compared with the condition on the left  
And else statement can also be provided to handle the other cases
