#include<stdio.h>
int main()
{
  int a[100], i, j, t, n;
  scanf("%d", &n);
  
  for(i = 0; i < n; i++)
    scanf("%d", &a[i]);
  
  
  for(i = 0; i < n -1; i++)
  {
    for(j = 0; i < n - i; i++)
    {
      if (a[j] < a[j+1]) {
        t = a[j];
        a[j+1] = a[j];
        a[j] = t;
      }
    }
  }

  
  for(i = 0; i < n; i++)
  {
    printf("%d ", a[i]);
  }
  
}