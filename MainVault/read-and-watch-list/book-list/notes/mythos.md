---
title: Mythos
tags:
  - book
  - mythology
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-27 08:32:25 -0600
---

Greek for Universe was Cosmos and Cosmos was Chaos  
Chaos gave birth to the Primordial Deities (First Order)  

The deities where the things they presented  
They could also turn into a form that could walk and talk

### The First Order

```mermaid
flowchart TD
	Erebus["Erebus\n(Darkness)"]:::male
	Nyx["Nyx\n(Night)"]:::female
	Gaia["Gaia\n(Earth)"]:::female
	Hemera["Hemera\n(Day)"]:::female
	Aether["Aether\n(Light)"]:::male
	Tartarus["Tartarus\n(Abyss)"]:::male
	Pontus["Pontus\n(Sea)"]:::male
	Ouranos["Ouranos\n(Sky)"]:::male
	Thalassa["Thalassa\n(Sea)"]:::female
	
	Chaos:::neutral --> Erebus & Nyx & Gaia & Tartarus
	Erebus & Nyx --- N1(( )):::merge --> Hemera & Aether
	Gaia --> Pontus & Ouranos
	Hemera & Aether --- N2(( )):::merge --> Thalassa

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Ouranos** (**Uranus**): Sky, Heavens  
**Thalassa** female counterpart of **Pontus**  
**Tartarus**: Greatest depths of earth

### The Second Order

Gaia loved the Cyclopes & Hecatonchires  
Ouranos was revolted by them and cursed them to never see the light  
They where pushed back into Gaia's womb

Gaia went to Mount Othyrs which looks over central Greek region of Phthiotis  
From its rocks she crafted a weapon (Sickle)

```mermaid
flowchart LR
	Gaia["Gaia\n(Earth)"]:::female
	Ouranos["Ouranos\n(Sky)"]:::male
	Oceanus["Oceanus"]:::male
	Coeus["Coeus"]:::male
	Crius["Crius"]:::male
	Hyperion["Hyperion"]:::male
	Iapetus["Iapetus"]:::male
	Kronos["Kronos"]:::male
	Theia["Theia"]:::female
	Themis["Themis"]:::female
	Mnemosyne["Mnemosyne\n(Memory)"]:::female
	Phoebe["Phoebe\n(Shining)"]:::female
	Tethys["Tethys"]:::female
	Rhea["Rhea"]:::female
	Brontes["Brontes\n(Thunder)"]:::male
	Steropes["Steropes\n(Lightning)"]:::male
	Arges["Arges\n(Brightness)"]:::male
	Cottus["Cottus"]:::male
	Gyges["Gyges"]:::male
	Aegaeon["Aegaeon"]:::male
	Nilus["Nilus\n(Nile)"]:::male
	Clymene["Clymene"]:::female
	Metis["Metis"]:::female
	Helios["Helios\n(Sun)"]:::male
	Selene["Selene\n(Moon)"]:::female
	Eos["Eos\n(Dawn)"]:::female
	Pontus["Pontus\n(Sea)"]:::male
	Eurybia["Eurybia"]:::female
	Nereus:::male
	Doris:::female
	Leto:::female

	Pontus & Gaia --- N0(( )):::merge --> Eurybia & Nereus
	Gaia & Ouranos --- N1(( )):::merge
	N1 --> Coeus & Phoebe & Crius & Hyperion & Theia & Iapetus
	N1 --> Themis & Mnemosyne & Kronos & Oceanus & Tethys & Rhea
	N1 --- N2(Cyclopes):::neutral & N3(Hecatonchires):::neutral
	N2 --> Brontes & Steropes & Arges
	N3 --> Cottus & Gyges & Aegaeon
	Oceanus & Tethys --- N4(( )):::merge --> Nilus
	N4 --- N5(Oceanids):::neutral --> Clymene & Metis & Doris
	Hyperion & Theia --- N6(( )):::merge --> Helios & Selene & Eos
	Coeus & Phoebe --- N7(( )):::merge --> Leto

    classDef male stroke:#0000FF,stroke-width:3px
	classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Cyclopes**: One-eyed Giants  
**Hecatonchires**: Fifty Heads and Hundred Hands  
**Oceanids**: Sea Nymphs

**Cottus**: The Furious  
**Gyges**: The Long-Limbed  
**Aegaeon**: The Sea-goat (**Briareos**: The Vigorous One)

**Metis**: Clever and Wise  
**Themis**: Law, Justice & Custom
**Leto** (**Latona**): Demure

| Father   | Mother  | Children                                                   |
| :------- | :------ | :--------------------------------------------------------- |
| Oceanus  | Tethys  | Nile, other rivers & 3000 Oceanids - Clymene, Metis, Doris |
| Coeus    | Phoebe  | Leto                                                       |
| Crius    | Eurybia |                                                            |
| Hyperion | Theia   | Helios, Selene, Eos                                        |
| Iapetus  | Cylmene | Atlas, Epimetheus, Prometheus                              |

#### Nyx Decendents

```mermaid
flowchart LR
	Nyx["Nyx\n(Night)"]:::female
	Moros["Moros\n(Doom)"]:::male
	Apate["Apate\n(Deceit)"]:::female
	Geras["Geras\n(Old Age)"]:::male
	Oizys["Oizys\n(Misery, Depression)"]:::female
	Momos["Momos\n(Mockery)"]:::female
	Eris["Eris\n(Strife, Discord)"]:::female
	Nemesis["Nemesis\n(Rettribution)"]:::female
	Charon["Charon"]:::male
	Hypnos["Hypnos\n(Sleep)"]:::male
	Oneiroi("Oneiroi\n(Dreams)"):::neutral
	Phobetor["Phobetor"]:::male
	Phantasos["Phantasos"]:::male
	Morpheus["Morpheus"]:::male
	Thanatos["Thanatos\n(Death)"]:::male
	Hesperides("Hesperides"):::neutral
	Aigle["Aigle"]:::female
	Erytheia["Erytheia"]:::female
	Hesperia["Hesperia"]:::female
	Keres("Keres"):::neutral

	Nyx --> Moros & Apate & Geras
	Nyx --> Oizys & Momos & Eris & Nemesis
	Nyx --> Charon & Hypnos & Thanatos
	Nyx --- Oneiroi --> Phobetor & Phantasos & Morpheus
	Nyx --- Hesperides --> Aigle & Erytheia & Hesperia
	Nyx --- Keres
	
    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Apate**: (**Farus**) - Fraud, Fraudulent, Fraudster  
**Geras**: (**Senectus**) - Senior, Senate, Senile  

**Oizys** (**Miseria** in Latin): Misery, Depression  
**Thanatos** (**Mors**): Death  

**Phobetor**: God of Nigtmares  
**Phantasos**: Things changing shapes in dream  
**Morpheus**: Shapeshifter  

**Hesperia**: Nymphs of the west and daughters of the evening (Magic Hour)

**Keres**: Death Goddess. Drawn to violet deaths on battlefield. Feasted on bodies

[Nyx - Wikipedia](https://en.wikipedia.org/wiki/Nyx)  
[What gods are considered to be kids of Nyx? - Quora](https://www.quora.com/What-gods-are-considered-to-be-kids-of-Nyx-Or-were-any-creatures-created-by-her-or-associated-with-her)

Kronos cuts his Fathers genitals and throws it over the mountain  
His Father curses him "May your children do as you destroy me"  
Ourano's blood fell on the ground and give rise to Eriynes, Gigantes and Meliae  
It lands in the sea near the Ionian island of Cythera which turned into Aphrodite

```mermaid
flowchart TD
	Gaia["Gaia\n(Earth)"]:::female
	OuranosB["Ourano's Blood"]:::male
	OuranosG["Ourano's Genitals"]:::male
	Erinyes["Eriynes\n(Furies)"]:::neutral
	Alecto["Alecto\n(Remorseless)"]:::female
	Megaera["Megaera\n(Jealous Rage)"]:::female
	Tisphone["Tisphone\n(Vengence)"]:::female
	Gigantes:::neutral
	Meliae:::neutral
	Aphrodite["Aphrodite\n(Beauty, Love)"]:::female

	Gaia & OuranosB --- N1(( )):::merge
	N1 --- Erinyes --> Alecto & Megaera & Tisphone
	N1 --- Gigantes
	N1 --- Meliae

	OuranosG --> Aphrodite

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Eriynes**: Eumenides (Kindly Ones)  
**Meliae**: Nymphs of the Ash Tree  
**Aphrodite** (**Venus**): Beauty, Love

#### Other Decedents

```mermaid
flowchart LR
	Oceanus:::male
	Tethys:::female
	Styx["Styx\n(Hate)"]:::female
	Phlegethon["Phlegethon\n(Fire)"]:::male
	Acheron["Acheron\n(Woe)"]:::male
	Lethe["Lethe\n(Forgetfulness)"]:::female
	Cocytus["Cocytus\n(Lamentation)"]:::male
	Echidna:::female
	Typhoon:::male
	Kerberos:::male
	Hydra:::female
	Gaia["Gaia\n(Earth)"]:::female
	Tartarus:::male

	Oceanus & Tethys --- N1(( )):::merge
	N1 --> Styx & Phlegethon & Acheron & Lethe & Cocytus

	Gaia & Tartarus --- N2(( )):::merge
	N2 --> Echidna & Typhoon

	Echidna & Typhoon --- N3(( )):::merge
	N3 --> Kerberos & Hydra

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Kerberos** (**Cerberus**): Three-headed dog with snake tail  

#### The Horai (Hours)

```mermaid
flowchart LR
	Themis["Themis\n(Law, Justice, Custom)"]:::female
	Auxesia["Auxesia\n(Summer)"]:::female
	Carpo["Carpo\n(Winter)"]:::female
	Thallo["Thallo\n(Spring)"]:::female
	Eunomia:::female
	Dike:::female
	Eirene:::female
	
	Themis --- N1(( )):::merge & N2(( )):::merge
	N1 --> Auxesia & Carpo & Thallo
	N2 --> Eunomia & Dike & Eirene

    classDef female stroke:#DE3163,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Thallo**: Spring (Roman: **Flora**)

**Eunomia**: Law and Legislation  
**Dike**: Justice and Moral Order (Roman: **Justitia**)  
**Eirene**: Peace (Roman: **Pax**)

#### The Moirai (Fates)

```mermaid
flowchart TD
	Nyx["Nyx\n(Night)"]:::female
	Clotho:::female
	Lachesis:::female
	Atropos:::female
	

	Nyx --- N1(( )):::merge
	N1 --> Clotho & Lachesis & Atropos

    classDef female stroke:#DE3163,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Clotho**: Spins Thread of Life  
**Lachesis**: Measures Thread of Life  
**Atropos**: Cuts Thread of Life

#### The Gorgons

```mermaid
flowchart TD
	Pontus["Pontus\n(Sea)"]:::male
	Gaia["Gaia\n(Earth)"]:::female
	Phorcys:::male
	Ceto:::female
	Eurybia:::female
	Stheno:::female
	Euryale:::female
	Medusa:::female
	

	Pontus & Gaia --- N1(( )):::merge
	N1 --> Phorcys & Ceto & Eurybia
	Phorcys & Ceto --- Gorgons:::neutral
	Gorgons --> Stheno & Euryale & Medusa

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

### The Olympians

Kronos became the Lord of the Earth, Sea and Sky  
He freed the Cyclopes & Hecatonchires from Gaia's omb and locked them in Tartarus  

He swallowed the 1st five children that where born to him by Rhea  
Before Zeus was born Rhea tricked Kronos into eating a large stone  
Rhea went to Crete where Zeus was born and was taken care of by Meliae and a she-goat  
Rhea put Metis in charge of teaching Zeus guile, craft and patience  

Metis created a tonic which Zeus gives to Koros  
This causes Kronos to vomit out the children and stone he had eaten  
The children where vomited in the reverse order they where born  
In this way Zeus became the elders Olympian when though he was born last

Zeus threw the stone far away and it landed in Pytho  
Zeus tried to kill Kronos but could not use the Sickle as Gaia was protecting her son  

There was a fierce war between the Olympians the Titans - Titanomachy  
Zeus freed Cyclopes & Hecatonchires from Tarturas and promised them freedom if they helped him and his siblings

Zeus wins the war over the Titans and becomes God of Gods (Heavens)  
Exiles his father to travel the world, measuring out eternity in lonely exile
Atlas (Zeus strongest enemy) is punished to hold the sky in place for eternity  
Hecatonchires are made guards of the roads that lead to the entrance to Tartarus  
Zeus assigns different domains to this siblings

```mermaid
flowchart TD
	Rhea:::female
	Kronos:::male
	Hestia:::female
	Hades:::male
	Demeter:::female
	Poseidon:::male
	Hera:::female
	Zeus:::male

	Rhea & Kronos --- N1(( )):::merge
	N1 --> Hestia & Hades & Demeter & Poseidon & Hera & Zeus

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Hestia** (**Vesta**): Hearth  
**Hades** (**Pluto**): Underworld  
**Poseidon** (**Neptune**): Ocean & Seas  
**Demeter** (**Ceres**): Harvest, Fertility and Seasons  
**Hera** (**Juno**): Marriage & Childbirth  
**Zeus** (**Jupiter**): Sky & Thunder

### Poseidon Lineage

**Nereus** son of **Gaia** & **Pontus**
**Doris** daughter of **Oceanus** & **Tethys** 

```mermaid
flowchart LR
	Rhea:::female
	Kronos:::male
	Demeter:::female
	Poseidon:::male
	Triton:::male
	Amphitrite:::female
	Nereus:::male
	Doris:::female
	Arion:::male

	Rhea & Kronos --- N1(( )):::merge
	N1 -->  Demeter & Poseidon 
	Doris & Nereus --- N2(( )):::merge --> Amphitrite
	Poseidon & Amphitrite --- N3(( )):::merge --> Triton
	Demeter & Poseidon --- N4(( )):::merge --> Arion

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Arion**: Horse with the power of speech  

### Zeus Lineage

Zeus through Mnemosyne and Eurynome has miltiple children  
None of them are considered Olympians

#### The Nine Muses

```mermaid
flowchart LR
	Zeus:::male
	Mnemosyne["Mnemosyne\n(Memory)"]:::female
	Calliope:::female
	Clio:::female
	Erato:::female
	Euterpe:::female
	Melpomene:::female
	Polyhymnia:::female
	Terpsichore:::female
	Thalia:::female
	Urania:::female

	Zeus & Mnemosyne --- N1(( )):::merge
	N1 --> Calliope & Clio & Erato & Euterpe & Melpomene
	N1 --> Polyhymnia & Terpsichore & Thalia & Urania

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

| Name | Position |
| :--- | :--- |
| Calliope (Beautiful Voice) | Muse of Epic Poetry |
| Clio | Muse of History |
| Erato | Muse of Lyric & Love Poetry |
| Euterpe (Delight, Joyous) | Muse of Music |
| Melpomene | Muse of Tragedy |
| Polyhymnia | Muse of Hymns |
| Terpsichore | Muse of Dance |
| Thalia | Muse of Idyllic Poetry |
| Urania | Muse of Astronomy |

#### The Charities (Three Graces)

**Eurynome** (Oceanid) daughter of **Oceanus** & **Tethys**

```mermaid
flowchart TD
	Zeus:::male
	Eurynome:::female
	Aglaea["Aglaea\n(Splendor)"]:::female
	Euphrosyne["Euphrosyne\n(Glee, Merriment)"]:::female
	Thalia["Thalia\n(Chearfulness)"]:::female
	

	Zeus & Eurynome --- N1(( )):::merge
	N1 --> Aglaea & Euphrosyne & Thalia

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

#### Olympian Children

Zeus has an affair with his sister Demeter and has a daughter Persephone  
Hera wants Zeus to be loyal to only her so she proposed the idea of public marriage  

When Hephaestus was born Hera throws him from Heaven  
On his mothers wedding he traps her in a chair no one is able to free her from the chair  
Hephaestus is able to free her from the chair and is given Aphrodite as wife  
Melissa (bee) makes Honey at the weeding feast and it becomes the food of the Gods   

Zeus has an affair with Metis in which he ends up swallowing her  
Zeus later has a unbearable headache which no one could find a cure
Hephaestus makes an axe and cuts Zeus head from which Athena is born  
Athena was born fully cloth in armor  
Metis remained trapped in Zeus and acts like a consigliere to guide him

```mermaid
flowchart LR
	Rhea:::female
	Kronos:::male
	Demeter:::female
	Zeus:::male
	Hera:::female
	Persephone:::female
	Hephaestus:::male
	Ares:::male
	Metis:::female
	Athena:::female
	Oceanus:::male
	Tethys:::female
	Leto:::female
	Artemis:::female
	Apollo:::male
	Coeus:::male
	Phoebe:::female
	Atlas:::male
	Pleione:::female
	Maia:::female
	Hermes:::male

	Rhea & Kronos --- N1(( )):::merge
	N1 -->  Hera & Zeus & Demeter 
	Oceanus	& Tethys --- N8(( )):::merge --> Metis
	Coeus & Phoebe --- N9(( )):::merge --> Leto
	Leto & Zeus --- N10(( )):::merge --> Artemis & Apollo
	Zeus & Demeter --- N5(( )):::merge --> Persephone
	Zeus & Metis --- N6(( )):::merge --> Athena
	Zeus & Hera --- N7(( )):::merge --> Hephaestus & Ares
	Atlas & Pleione --- N11(( )):::merge --> Maia
	Zeus & Maia --- N12(( )):::merge --> Hermes

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Ares** (**Mars**): God of War  
**Hephaestus** (**Vulcan**): God of Fire & of Blacksmiths

**Athena** (**Minerva**): Wisdom, Warfare and Handicrafts  
**Artemis** (**Diana**): Wild animals, Hunt, Chastity and Childbirth  
**Apollo**: Sun, Archery, Healing, Prophecy, Knowledge and Music

Zeus has an affair with Leto. Hera hears about it and gets angry  
She asks Gaia to to put a curse on Leto and not provide her any place to give birth  
Leto eventually makes it to Delos a small island which is not bound to the Earth  

**Omphalos** stone that Rhea used to prevent Kronos from eating Zeus  
It landed on **Mount Parnassus** at a place called **Pytho**  
Considered the center of the world by the Greeks  
On command of Gaia a guardian of the stone emerged - Python  

Leto Gives birth to Artemis and Apollo. Hera tries to kill them again using Python  
Apollo asks Hephaestus to make bow and arrow for him using which he kills Python  
Python comes back to life as its protected by Gaia (Apollo is still a infant)  
Apollo exiled to Mount Parnassus and replaced Python as the guardian of **Omphalos**  

Pytho was later named to Delphi by Apollo  
Apollo was tasked by conducting athletic tournaments - Pythian Games  
Apollo also established an Oracle who anyone could ask about the future  
Zeus binds Delos to the Earth and made it the resting place for the Python

**11 Olympians**  
Zeus, Hera, Hestia, Poseidon, Demeter, Aphrodite  
Hephaestus, Ares, Athena, Artemis, Apollo

Zeus has a secret affair with Maia and has Hermes who becomes the 12 Olympian  
He was born in a cave in Mount Cyllene  
Hermes when he was not even 1/2 hour old made fire by rubbing two stones

**Hermes** (**Mercury**): Messenger of Gods, God of the Travelers, Thieves, Merchants  
