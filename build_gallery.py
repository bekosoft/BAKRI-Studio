import os

relif_images = [
  ("Relif_opt/DSC_0902.JPG", "relif1Title", "relif1Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0909.JPG", "relif2Title", "relif2Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_0913.JPG", "relif3Title", "relif3Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_0915.JPG", "relif4Title", "relif4Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0916.JPG", "relif5Title", "relif5Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0927.JPG", "relif6Title", "relif6Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_0930.JPG", "relif7Title", "relif7Desc", "stories", "community-resilience"),
  ("Relif_opt/DSC_0942.JPG", "relif8Title", "relif8Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_0958.JPG", "relif9Title", "relif9Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0972.JPG", "relif10Title", "relif10Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_0977.JPG", "relif11Title", "relif11Desc", "photo", "humanitarian-events"),
  ("Relif_opt/DSC_0983.JPG", "relif12Title", "relif12Desc", "stories", "human-stories"),
  ("Relif_opt/DSC_0985.JPG", "relif13Title", "relif13Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0996.JPG", "relif14Title", "relif14Desc", "photo", "relief-operations"),
  ("Relif_opt/DSC_0999.JPG", "relif15Title", "relif15Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_1001.JPG", "relif16Title", "relif16Desc", "stories", "portraits"),
  ("Relif_opt/DSC_1004.JPG", "relif17Title", "relif17Desc", "photo", "field-missions"),
  ("Relif_opt/DSC_1013.JPG", "relif18Title", "relif18Desc", "photo", "relief-operations")
]

su_images = [
  ("su_opt/DSC_6657.JPG", "su1Title", "su1Desc", "stories", "portraits"),
  ("su_opt/DSC_6658.JPG", "su2Title", "su2Desc", "stories", "human-stories"),
  ("su_opt/DSC_6659.JPG", "su3Title", "su3Desc", "photo", "humanitarian-events"),
  ("su_opt/DSC_6714.JPG", "su4Title", "su4Desc", "photo", "field-missions"),
  ("su_opt/DSC_6768.JPG", "su5Title", "su5Desc", "photo", "field-missions"),
  ("su_opt/DSC_6774.JPG", "su6Title", "su6Desc", "stories", "community-resilience"),
  ("su_opt/DSC_6787.JPG", "su7Title", "su7Desc", "photo", "field-missions"),
  ("su_opt/IMG-20241005-WA0002.jpg", "su8Title", "su8Desc", "photo", "field-missions"),
  ("su_opt/IMG-20241005-WA0003.jpg", "su9Title", "su9Desc", "stories", "human-stories"),
  ("su_opt/IMG-20241005-WA0004.jpg", "su10Title", "su10Desc", "photo", "humanitarian-events"),
  ("su_opt/IMG-20241005-WA0016.jpg", "su11Title", "su11Desc", "photo", "field-missions"),
  ("su_opt/IMG-20241005-WA0017.jpg", "su12Title", "su12Desc", "stories", "community-resilience"),
  ("su_opt/IMG-20241005-WA0019.jpg", "su13Title", "su13Desc", "photo", "relief-operations"),
  ("su_opt/IMG-20241005-WA0041.jpg", "su14Title", "su14Desc", "stories", "portraits"),
  ("su_opt/IMG-20241005-WA0045.jpg", "su15Title", "su15Desc", "photo", "field-missions"),
  ("su_opt/IMG-20241005-WA0047.jpg", "su16Title", "su16Desc", "photo", "relief-operations"),
  ("su_opt/IMG-20241005-WA0050.jpg", "su17Title", "su17Desc", "stories", "human-stories"),
  ("su_opt/IMG-20260926-WA0000.jpg", "su18Title", "su18Desc", "photo", "field-missions"),
  ("su_opt/IMG-20260926-WA0001.jpg", "su19Title", "su19Desc", "stories", "portraits"),
  ("su_opt/IMG-20260926-WA0002.jpg", "su20Title", "su20Desc", "photo", "humanitarian-events"),
  ("su_opt/IMG-20260926-WA0003.jpg", "su21Title", "su21Desc", "stories", "community-resilience"),
  ("su_opt/IMG-20260926-WA0004.jpg", "su22Title", "su22Desc", "photo", "field-missions"),
  ("su_opt/IMG-20260926-WA0005.jpg", "su23Title", "su23Desc", "photo", "relief-operations"),
  ("su_opt/IMG-20260926-WA0006.jpg", "su24Title", "su24Desc", "stories", "human-stories"),
  ("su_opt/IMG-20260926-WA0007.jpg", "su25Title", "su25Desc", "photo", "field-missions"),
  ("su_opt/IMG-20260926-WA0008.jpg", "su26Title", "su26Desc", "stories", "portraits"),
  ("su_opt/IMG-20260926-WA0009.jpg", "su27Title", "su27Desc", "photo", "field-missions"),
  ("su_opt/IMG-20260926-WA0010.jpg", "su28Title", "su28Desc", "stories", "community-resilience"),
  ("su_opt/sh (1).jpg", "sh1Title", "sh1Desc", "comms", "campaign-kits"),
  ("su_opt/sh (2).jpg", "sh2Title", "sh2Desc", "comms", "infographics"),
  ("su_opt/sh (3).jpg", "sh3Title", "sh3Desc", "comms", "visibility-collateral")
]

folder_1 = [
  ("1/r1 (1).jpg", "f1_1Title", "f1_1Desc", "photo", "humanitarian-events"),
  ("1/r1 (2).jpg", "f1_2Title", "f1_2Desc", "stories", "human-stories"),
  ("1/r1 (3).jpg", "f1_3Title", "f1_3Desc", "photo", "humanitarian-events"),
  ("1/r1 (4).jpg", "f1_4Title", "f1_4Desc", "stories", "community-resilience"),
  ("1/r1 (5).jpg", "f1_5Title", "f1_5Desc", "photo", "humanitarian-events"),
  ("1/r1 (6).jpg", "f1_6Title", "f1_6Desc", "stories", "portraits"),
  ("1/r1 (7).jpg", "f1_7Title", "f1_7Desc", "photo", "humanitarian-events")
]

folder_4 = [
  ("4/c (1).jpg", "f4_1Title", "f4_1Desc", "comms", "campaign-kits"),
  ("4/c (3).jpg", "f4_3Title", "f4_3Desc", "comms", "donor-reports"),
  ("4/c (5).jpg", "f4_5Title", "f4_5Desc", "comms", "infographics")
]

folder_5 = [
  ("5/d (1).jpg", "f5_1Title", "f5_1Desc", "photo", "site-survey"),
  ("5/d (2).jpg", "f5_2Title", "f5_2Desc", "photo", "humanitarian-events"),
  ("5/d (3).jpg", "f5_3Title", "f5_3Desc", "stories", "portraits"),
  ("5/d (4).jpg", "f5_4Title", "f5_4Desc", "photo", "site-survey"),
  ("5/d (5).jpg", "f5_5Title", "f5_5Desc", "photo", "humanitarian-events"),
  ("5/d (6).jpg", "f5_6Title", "f5_6Desc", "photo", "field-missions")
]

folder_6 = [
  ("6/w (1).jpg", "f6_1Title", "f6_1Desc", "comms", "editorial-layouts"),
  ("6/w (3).jpg", "f6_3Title", "f6_3Desc", "comms", "visibility-collateral"),
  ("6/w (5).jpg", "f6_5Title", "f6_5Desc", "comms", "campaign-kits")
]

folder_7 = [
  ("7/x (1).jpg", "f7_1Title", "f7_1Desc", "photo", "relief-operations"),
  ("7/x (2).jpg", "f7_2Title", "f7_2Desc", "photo", "humanitarian-events"),
  ("7/x (3).jpg", "f7_3Title", "f7_3Desc", "stories", "portraits"),
  ("7/x (4).jpg", "f7_4Title", "f7_4Desc", "photo", "field-missions"),
  ("7/x (5).jpg", "f7_5Title", "f7_5Desc", "stories", "community-resilience")
]

folder_des = [
  ("des/p (3).jpg", "fdes_3Title", "fdes_3Desc", "comms", "editorial-layouts"),
  ("des/p (4).jpg", "fdes_4Title", "fdes_4Desc", "comms", "infographics"),
  ("des/p (5).jpg", "fdes_5Title", "fdes_5Desc", "comms", "visibility-collateral")
]

all_items = relif_images + su_images + folder_1 + folder_4 + folder_5 + folder_6 + folder_7 + folder_des

print(f"Total items registered: {len(all_items)}")

# Verify all paths exist
for path, tkey, dkey, cat, sub in all_items:
  if not os.path.exists(path):
    print(f"ERROR: Missing path {path}")
  else:
    pass

print("All image file checks completed successfully!")
