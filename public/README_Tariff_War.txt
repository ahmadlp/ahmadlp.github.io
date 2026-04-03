********************************************************************************
* This page provides links to two folders in zip format:
	1. Master_Folder_Tariff_War [Link 1]
	2. Data_Preparation_Files.zip [Link2]
These two folders contain all the code and data used to obtain the results reported in Section 5 of "Measuring the Cost of a Global Tariff War: A Sufficient Statistics Approach" by Ahmad Lashkaripour. 

* After downloading and unzipping 'Master_Folder.zip', set this folder as your directory in all the M-files named as 'Main*.m' (e.g., cd "~/Downloads/Master_Folder_Tariff_War" in Mac OS)

* After downloading 'Data_Preparation_Files.zip', copy and paste the unzipped folder as a subfolder in 'Master_Folder_Tariff_War'.


* Please send your questions about the code to Ahmad Lashkaripour (ahmadlp@gmail.com).

********************************************************************************
* Executing the Code
********************************************************************************

All executable Matlab files are named "Main":
	- 'Main_Data.m' reads the data from raw files and prepares it for the analysis. The output is saved in 'mat' format in the subfolder 'Cleaned_Data_Files'.

	- 'Main_Figure2.m' produces Figure 2 using the output produced by. 'Main_Data.m'. The output of this m-file is saved under two different formats as 'Figure_2.png' and 'Figure_2.eps.'

	- 'Main_Table1.m' produces Table 2 using the output produced by 'Main_Data.m'. The output of this m-file is saved as 'Table_1.tex'.

	- 'Main_Figure5.m' produces Figure 5 using the output produced by 'Main_Data.m'. The output of this m-file is also saved under two different formats as 'Figure_2.png' and 'Figure_2.eps.'


********************************************************************************
* Input Data
********************************************************************************

- The folder 'Data_Preparation_Files' contains the raw data and m-files used by 'Main_Data.m'  to generate the mat-files used by 'Main_Figure2.m' , 'Main_Table1.m', and 'Main_Figure5.m'. 

- The size of 'Data_Preparation_Files' is over 1GBs. If you are uninterested in constructing the mat-files from raw data, download and save this file in main directory. Then run 'Main_Data.m' to update the mat-files in subfolder 'Cleaned_Data_Files'.


- The raw expenditure data saved in the subfolder 'WIOD_Data' can be downloaded directly as part of the 2016 release the of World Input-Output Database (http://www.wiod.org/). The procedure used to read and clean the CSV files borrows heavily from the codes provided by Costinot and Rodriguez-Clare (2014). The subfolders 'Baseline_Model', 'IO_Model', 'MC_Model', and 'Integrated_Model' contain these files.

- The raw tariff data saved in the subfolder 'TRAINS_Data' is downloaded from from WITS, using the following guidelines: To download the original data, go to http://wits.worldbank.org/. Then
	1) After login, go to the WITS->Advanced Query->Tariff and Trade Analysis.
	2) Choose the data source as TRAINS.
	3) Fill in the required fields using the following guidelines:
	   (a) choose effectively applied tariffs (AHS).
	   (b) As in Kucheryavyy et al (2019), use simple tariff line average
  		 as the measure of tariff for each importer-exporter-industry combination.
	   (c) Choose a year from 2000 to 2014, then click "Adjust Years
   		 & Submit".Choose "Use the nearest year (earlier year wins ties)"
	   (d) Then, click "Go," then "Proceed."

To make the raw TRAINS data compatible with the WIOD data, use the STATA file provided by Kucheryavyy, Lyn, Rodriguez-Clare (2019). These files are hosted through Kucheryavyy's webpage: https://sites.google.com/site/kskucheryavyy/research. The final matrix of applied tariffs is save under  "Prepare_Data/tariff_2014_TRAINS".
