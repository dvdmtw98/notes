---
title: Mythos
tags:
  - book
  - mythology
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-03 20:00:39 -0600
---
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

**Ouranos**: Uranus  
**Thalassa** female counterpart of **Pontus**  
**Tartarus**: Greatest depths of earth

### The Second Order

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
	Phoebe["Phoebe"]:::female
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

	Pontus & Gaia --- N0(( )):::merge --> Eurybia & Nereus
	Gaia & Ouranos --- N1(( )):::merge
	N1 --> Coeus & Crius & Hyperion & Theia & Iapetus & Kronos
	N1 --> Themis & Mnemosyne & Phoebe & Oceanus & Tethys & Rhea
	N1 --- N2(Cyclopes):::neutral & N3(Hecatonchires):::neutral
	N2 --> Brontes & Steropes & Arges
	N3 --> Cottus & Gyges & Aegaeon
	Oceanus & Tethys --- N4(( )):::merge --> Nilus
	N4 --- N5(Oceanids):::neutral --> Clymene & Metis & Doris
	Hyperion & Theia --- N6(( )):::merge --> Helios & Selene & Eos

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

| Father | Mother | Children |
| :--- | :--- | :--- |
| Oceanus | Tethys | Nile, other rivers & 3000 Oceanids - Clymene, Metis, Doris |
| Coeus | Phoebe |  |
| Crius | Eurybia |  |
| Hyperion | Theia | Helios, Selene, Eos |
| Iapetus | Cylmene | Atlas, Epimetheus, Prometheus |

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

#### Other Decendents

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

### The Olympians

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

#### Olympians Lineage

**Doris** (Oceanid) daughter of **Oceanus** & **Tethys**  
**Nereus** son of **Gaia** & **Pontus**

```mermaid
flowchart LR
	Rhea:::female
	Kronos:::male
	Demeter:::female
	Poseidon:::male
	Zeus:::male
	Hera:::female
	Triton:::male
	Amphitrite:::female
	Nereus:::male
	Doris:::female
	Arion:::male
	Persephone:::female
	Hephaestus:::male
	Ares:::male

	Rhea & Kronos --- N1(( )):::merge
	N1 -->  Hera & Zeus & Demeter & Poseidon 
	Nereus & Doris --- N2(( )):::merge --> Amphitrite
	Poseidon & Amphitrite --- N3(( )):::merge --> Triton
	Demeter & Poseidon --- N4(( )):::merge --> Arion
	Zeus & Demeter --- N5(( )):::merge --> Persephone
	Hera & Zeus --- N6(( )):::merge --> Hephaestus & Ares

    classDef male stroke:#0000FF,stroke-width:3px
    classDef female stroke:#DE3163,stroke-width:3px
    classDef neutral stroke:#999999,stroke-width:3px
    classDef merge fill:#FFFFFF
```

**Arion**: Horse with the power of speech  

**Ares** (**Mars**): God of War  
**Hephaestus** (**Vulcan**): God of Fire & of Blacksmiths

### Other Lineages

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
