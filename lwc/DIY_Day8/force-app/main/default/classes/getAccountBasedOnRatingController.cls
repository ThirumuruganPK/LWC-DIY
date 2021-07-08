public with sharing class getAccountBasedOnRatingController {
    public getAccountBasedOnRatingController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountInfos(String ratingValue){
        
        List<Account> accountList = new List<Account>();

        try {
             accountList =  [
                                SELECT  
                                Id,Name,Rating
                                FROM Account
                                where Rating =:ratingValue
                            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return accountList;
    }


    
}
