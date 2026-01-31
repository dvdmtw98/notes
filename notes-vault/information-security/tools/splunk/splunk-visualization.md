---
title: Splunk Visualization
tags:
  - security
  - tool
  - splunk
date: 2026-01-24 18:20:56 +0530
updated: 2026-01-25 12:15:29 +0530
---

Statistics tables can be used to create various types of visualizations.  
Single Series: Two Column  
Multi-Series: More than 2 Columns (Multiple values for x-axis)  
Time Series: Time (x-axis) with 1 or more columns (x-axis)

#### Chart

<u>Single Series</u>  
Command: `chart <stats-function> over <field>`  
The stats function result is used as the y-axis it's always a numeric value.  

<u>Multi-Series</u>  
Command: `chart <stats-function> over <field1> by <field2>`  
The by clause splits `field1` (x-axis) into multiple series.  

Command: `chart <stats-function> by <field1>, <field2>`  
The by clause followed by 2 fields is equivalent to the over by syntax.  

```
index=main sourcetype=eventgen
| chart count over nodeName by failureCode 
	limit=5 useother=false usenull=false
```

If there are more than 10 series for the split by clause, the remaining are grouped into the series OTHER.  
Events with NULL in the split by clause field is placed in NULL.  

[chart \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.2/search-commands/chart#tc-options-0)

#### Timechart
Charts where time is always the x-axis.  
The output is always buckets over the time range (Span to change bucket).  

For a 60 min search the span is default 1 min.  
For a 24 hour search the span is default 30 min.

<u>Single Series</u>  
Command: `timechart <stats-function>`  
The stats function result is used as the y-axis it's always a numeric value.  

<u>Multi-Series</u>  
Command: `timechart <stats-function> by <field1>`  

```
index=main sourcetype=eventgen
| timechart span=5m count by failureCode 
	limit=5 useother=false usenull=false
```

[timechart \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/10.2/search-commands/timechart#ariaid-title4)

When used with single value statistics additional options are available.  
Sparkline: Displays time-based trends associated with the single value.  
Trend: Direction in which values are moving.  

#### Scatter Chart
Show relationship between data points in two dimensions.  

Requires 3 fields (if more limit it using table command).  
1st Field - Category & Legend   
2nd Field - X-Axis Field  
3rd Field - Y-Axis Field  

```
index=main sourcetype=eventgen
| eval eventPrice = duration * price
| stats sum(eventPrice) as "Total Price", 
	sum(duration) as "Total Minutes" by partner
| table partner, "Total Minutes", "Total Price"
```

#### Bubble Chart
Visualize multiple series data in three dimensions.  
Bubble position represents two dimensions of the series.  
Bubble size represents the 3rd dimension.  

Requires 4 fields (if more fields then limit it using table command).  
1st Field - Bubble Color & Legend  
2nd Field - X-Axis  
3rd Field - Y-Axis  
4th Field - Bubble Size

```
index=main sourcetype=eventgen
| eval eventPrice = duration * price
| stats sum(eventPrice) as "Total Price", 
	sum(duration) as "Total Minutes", 
	count as "Total Events" by partner
| table partner, "Total Minutes", "Total Price", "Total Events"
```

#### Single Value
Requires a statistics table that comprises of a single value.  

To show trend and sparkline a timechart with single value has to be created.  
Use the `partial=false` option to get the correct trend value.  

```
index=main sourcetype=eventgen 
| stats count as totalEvents 
	count(eval(callResult=="Success")) as successfulEvents 
| eval successPercentage=(successfulEvents/totalEvents)*100 
| gauge successPercentage 0 30 60 90 100
```

The radial gauge created using the command lacks flexibility (we cannot configure colors).

#### Maps
**Cluster Map** cannot be created without latitude and longitude data.  
`geostats` expects latitude and longitude in fields `lan` & `lon` respectively.  
Public IP addresses can be mapped to location using `iplocation` command.  

```
index=web sourcetype="access_combined" action=purchase 
| iplocation clientip
| geostats latfield=lat longfield=lon count by categoryId globallimit=4
```

[iplocation \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/search/spl-search-reference/9.4/search-commands/iplocation)

The `geom` command is used to plot **Choropleth** maps.  
To create choropleth maps `.kmz` files that have the boundaries are required.  

The command works like a lookup. It maps a feature/field to coordinates on the map using feature collections.  
The collection `geo_countries` and `geo_us_states` are packaged with Splunk.  

```
index=web sourcetype="access_combined" action=purchase 
| iplocation clientip
| stats count as totalPurchases by Country
| geom geo_countries featureIdField="Country"
```

[geom \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.0/search-commands/geom#1.-use-the-default-settings-0)

#### Trendline
The `trendline` command has 3 different functions for calculating trend.

The interval can be anything between 2 and 10000.  
The interval is mentioned along with the name of the function.  

Trendline defaults to area chart. Using the overlay option it can be turned into a proper trendline.  

```
index=main sourcetype="eventgen" partner="Telco01" callResult=Failure 
| timechart span=15min count as totalFailures partial=false 
| trendline sma3(totalFailures) as trend
```

In the above command the trendline command calculates an average using 5 data points from the field that is calculated using the `timechart` command.

[trendline \| Splunk Docs](https://help.splunk.com/en/splunk-enterprise/spl-search-reference/9.4/search-commands/trendline)
